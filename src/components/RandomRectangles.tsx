import React, { useState, useEffect } from 'react';

interface Rectangle {
  id: number;
  top: number;
  left: number;
  width: number;
  height: number;
  delay: number;
  speed: number;        //각 직사각형의 고유 이동 속도 비율 (0.4배 ~ 1.6배)
}

interface RandomRectanglesProps {
  /** 터치 이벤트가 발생한 횟수나 식별자를 넘겨받아 감지합니다. */
  triggerKey: number;
  translateX: number;
  isLeaving: boolean;

}

const RandomRectangles: React.FC<RandomRectanglesProps> = ({ triggerKey, translateX, isLeaving }) => {
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);

//   console.log('translateX: ', translateX);

  // App에서 전달하는 triggerKey가 변경될 때마다(즉, 터치할 때마다) 새로 사각형을 생성합니다.
  useEffect(() => {
    if (triggerKey === 0) return; // 초기화 상태일 때는 생성하지 않음

    const ratios = [1, 2, 3];
    const newRects: Rectangle[] = [];

    // 화면 전체에 고르게 분산시키기 위한 4x4 행렬 배치
    const gridRows = 4;
    const gridCols = 8;

    const cellWidth = 200 / gridCols;
    const cellHeight = 100 / gridRows; // 세로 한 칸당 25%

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const index = row * gridCols + col;

        const width = Math.random() * 160 + 60; // 폭 조절 (60px ~ 120px)
        const randomRatio = ratios[Math.floor(Math.random() * ratios.length)];
        const height = width * randomRatio;

        //0.4에서 1.6 사이의 무작위 속도 가중치를 부여합니다.
        // 1보다 작으면 느리게 움직여서 멀리 있는 느낌을, 1보다 크면 빠르게 움직여서 가까이 있는 느낌을 줍니다.
        const speed = Math.random() * 1.2 + 0.4;

        // 각 구역 내부에서만 살짝 어긋나게(Jittering) 배치하여 고른 분포 유도
        const top = (row * cellHeight) + (Math.random() * (cellHeight * 0.3));
        const left = -50 + (col * cellWidth) + (Math.random() * (cellWidth * 0.4));
        const delay = Math.random() * 0.3;

        newRects.push({
          id: index,
          top: Math.min(top, 70),  // 세로로 길어졌을 때 하단 화면 탈출 방지
          left, 
          width,
          height,
          delay,
          speed,
        });
      }
    }

    setRectangles(newRects);
  }, [triggerKey]);

  return (
    <>
      {rectangles.map((rect) => (
        <div
          key={rect.id}
          className={`random-rect ${isLeaving ? 'leaving' : ''}`}
          style={{
            top: `${rect.top}%`,
            left: `${rect.left}%`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            '--x': `${translateX}px`,
            '--speed': rect.speed,
            '--rect-delay': `${rect.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default RandomRectangles;
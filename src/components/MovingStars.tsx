import React, { useMemo } from 'react';

// 별 하나가 가질 랜덤 속성들의 타입 정의
interface StarProps {
  id: number;
  size: number;
  duration: number;
  top: number;
  delay: number;
  startX: string;
  endX: string;
}

function MovingStars() {
  // 별 20개의 배열 데이터 생성
  const starIndices = Array.from({ length: 20 }, (_, i) => i);

  // ⭐️ useMemo를 사용하여 리렌더링 시 별들이 깜빡이며 재배치되는 현상 방지
  const stars: StarProps[] = useMemo(() => {
    return starIndices.map((index) => {
      const size = Math.random() * 2 + 0.8; // 별 크기
      const duration = 15 - (size - 1) * 5; // 크기에 따른 속도 계산
      const top = Math.random() * 100;      // Y축 위치
      const delay = Math.random() * -duration; // 마이너스 딜레이

      const isLeftToRight = index % 2 === 0;
      const startX = isLeftToRight ? '-10vw' : '110vw';
      const endX = isLeftToRight ? '110vw' : '-10vw';

      return {
        id: index,
        size,
        duration,
        top,
        delay,
        startX,
        endX,
      };
    });
  }, []); // 빈 배열: 처음 마운트될 때 딱 한 번만 실행

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            '--start-x': star.startX,
            '--end-x': star.endX,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

export default MovingStars;
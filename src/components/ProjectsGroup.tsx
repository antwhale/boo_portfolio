import React, { useState, useRef,  } from 'react';
import { ProjectInfo } from '../const/project_info';
import frameV from '../assets/image-frame-v.png';
import frameH from '../assets/image-frame-h.png';


interface ProjectsGroupProps {
  projects: ProjectInfo[];
}

// ⭐️ 드래그 상태를 추적하기 위한 인터페이스
interface DragState {
  index: number;
  startX: number;
  startY: number;
  startLeft: number;
  startTop: number;
}

const ProjectsGroup: React.FC<ProjectsGroupProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);

  // ⭐️ 각 카드의 실시간 위치(px 또는 %)를 관리하기 위한 상태 변수
  // 초기 렌더링 시 계산된 값을 보관하고, 드래그 시 이 값을 변경합니다.
  const [positions, setPositions] = useState<{ [key: number]: { top: number; left: number, zIndex: number  } }>(() => {
    const initialPositions: { [key: number]: { top: number; left: number, zIndex: number } } = {};
    
    projects.forEach((_, index) => {
      const zone = Math.floor(Math.random() * 3); 
      let randomLeft = 0;
      const padding = 4;
      const zoneWidth = 25;

      if (zone === 0) randomLeft = padding + Math.random() * zoneWidth;
      else if (zone === 1) randomLeft = 33.3 + padding + Math.random() * zoneWidth;
      else randomLeft = 66.6 + padding + Math.random() * zoneWidth;

      const randomTop = Math.random() * 70 + 5;
      const randomZIndex = Math.floor(Math.random() * 10) + 1; // zIndex 고정 
      // 뷰포트(vw, vh) 기준으로 계산된 초기 % 값을 상태에 매핑
      initialPositions[index] = { top: randomTop, left: randomLeft, zIndex: randomZIndex };
    });
    
    return initialPositions;
  });

  // ⭐️ [드래그 시작 핸들러] 마우스 클릭 / 터치 다운
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    console.log('handleDragStart');
    // 텍스트 드래그 선택 현상 방지
    if (e.type === 'mousedown') e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    // 현재 클릭한 카드의 기존 좌표값 기입
    const currentPos = positions[index];

    dragRef.current = {
      index,
      startX: clientX,
      startY: clientY,
      startLeft: currentPos.left,
      startTop: currentPos.top
    };

    // 움직일 때 전역 이벤트를 감지하도록 리스너 등록
    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragging, { passive: false });
    window.addEventListener('touchend', handleDragEnd);
  };

  // ⭐️ [드래그 중 핸들러] 실시간 마우스/손가락 이동 추적
  const handleDragging = (e: MouseEvent | TouchEvent) => {
    // console.log('handleDragging');

    const dragInfo = dragRef.current;

    if (!dragInfo|| !containerRef.current) return;

    // 모바일 브라우저의 기본 스크롤 동작 방지
    if (e.cancelable) e.preventDefault();

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // 만약 부모 컨테이너 크기를 읽지 못했다면 강제 탈출 예외 처리
    if (containerWidth === 0 || containerHeight === 0) return;

    // 이동한 거리 계산 (px -> % 단위를 위해 컨테이너 크기로 나눈 뒤 100을 곱함)
    const deltaX = ((clientX - dragInfo.startX) / containerWidth) * 100;
    const deltaY = ((clientY - dragInfo.startY) / containerHeight) * 100;

    const targetIndex = dragInfo.index;

    setPositions((prev) => ({
      ...prev,
      [targetIndex]: {
        ...prev[targetIndex], // 기존 zIndex 유지를 위해 스프레드 처리
        left: dragInfo!.startLeft + deltaX,
        top: dragInfo!.startTop + deltaY,
      }
    }));
  };

  // ⭐️ [드래그 종료 핸들러] 마우스 뗌 / 터치 끝
  const handleDragEnd = () => {
    dragRef.current = null;
    
    // 이벤트 리스너 제거
    window.removeEventListener('mousemove', handleDragging);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchmove', handleDragging);
    window.removeEventListener('touchend', handleDragEnd);
  };

  const handleClick = () => {
    console.log("handleClick");


  };

  if (!projects || projects.length === 0) {
    return <div className="no-projects">등록된 프로젝트가 없습니다.</div>;
  }

  return (
    <div className="projects-random-container" ref={containerRef}>
        {projects.map((project, index) => {
          // ⭐️  images 배열의 첫 번째 이미지를 추출합니다. (없을 경우를 대비한 Fallback 처리)
          const representImage = project.images && project.images.length > 0 
            ? project.images[0] 
            : 'https://via.placeholder.com/400x300?text=No+Image'; // 대체 이미지

          // 해당 인덱스의 고유 실시간 좌표값 꺼내기
        const pos = positions[index] || { top: 50, left: 50, zIndex: 20 };
        // const randomZIndex = Math.floor(Math.random() * 10) + 1;
        const aspectRatio = project.imageDirection === 'v' ? '2 / 3' : '3 / 2';
        const frameImageUrl = project.imageDirection === 'v' ? frameV : frameH;

        return (
          <div key={`${project.title}-${index}`} 
            className="project-random-frame"
            style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            zIndex: pos.zIndex,
            cursor: 'grab'
          }}
          onMouseDown={(e) => handleDragStart(e, index)}
          onTouchStart={(e) => handleDragStart(e, index)}
          onClick={() => handleClick()}
          >
          {/* 이미지 액자 영역 */}
          <div
            className="project-image-wrapper"
            style={{ 
            aspectHeight: undefined,
            aspectRatio: aspectRatio,
            backgroundImage: `url('${frameImageUrl}')`
          } as React.CSSProperties}
          >
            <img 
              src={representImage} 
              alt={`${project.title} 대표 이미지`} 
              className="project-represent-img"
              loading="lazy" // 성능 최적화를 위한 지연 로딩
              width={project.imageDirection === 'v' ? '60%' : '80%'}
              draggable='false'
            />
          </div>

        
          </div>
        );
      })}
      
    </div>
  );
};

export default ProjectsGroup;

     {/* 하단 텍스트 정보 영역 */}
              {/* <div className="project-meta-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.appDescription}</p>
                
                {project.userCnt > 0 && (
                  <span className="project-users">👥 {project.userCnt.toLocaleString()}명 이용 중</span>
                )}
                
                <div className="project-stacks-badge">
                  {project.stacks.split(',').map((stack, sIdx) => (
                    <span key={sIdx} className="stack-badge">{stack.trim()}</span>
                  ))}
                </div>
              </div> */}
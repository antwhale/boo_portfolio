import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MovingStars from './components/MovingStars';
import RandomRectangles from './components/RandomRectangles';
import { androidProjects, iosProjects, ProjectInfo, reactNativeProjects } from './const/project_info';
import ProjectsGroup from './components/ProjectsGroup';

function App() {
  // 1. 메뉴 목록(배열 t)
  const menu = [
    "Home", "Android", "iOS", "ReactNative"
  ];


  // ⭐️ State to track the currently selected card title
  const [selectedCard, setSelectedCard] = useState<string | null>("Home");
  const [isWhiteScreenShow, setWhiteScreenShow] = useState(false);
  const [touchTrigger, setTouchTrigger] = useState<number>(0);
  const [swiperX, setSwiperX] = useState<number>(0);    //Swiper의 실시간 이동거리 저장(px단위)
  const [isRectanglesLeaving, setRectanglesLeaving] = useState(false);
  const [isRectanglesShow, setRectanglesShow] = useState(false);
  const [projectList, setProjectList] = useState<ProjectInfo[]>([]);
  const [isProjectListShow, setProjectListShow] = useState(false);

  

  const handleSlideChange = (swiper: any) => {
    const currentRealIndex = swiper.realIndex;
    const currentMenu = menu[currentRealIndex];

    console.log("현재 중앙에 배치된 카드의 인덱스:", currentRealIndex);
    console.log("현재 중앙에 배치된 카드의 값(Key):", currentMenu);

    setSelectedCard(currentMenu)

    if(currentRealIndex == 0) {
      setWhiteScreenShow(false);
      setProjectList([]);
    } else{
      if(isWhiteScreenShow == false) {
        setWhiteScreenShow(true);
      }

      if(currentRealIndex == 1) {
        setProjectList(androidProjects);
      } else if(currentRealIndex == 2) {
        setProjectList(iosProjects);
      } else if(currentRealIndex == 3) {
        setProjectList(reactNativeProjects);
      } else {
        setProjectList([]);
      }
    }
  };

  const handleTouchEnd = () => {
    console.log('handleTouchEnd');

    setRectanglesLeaving(true);

    setTimeout(() => {
      setTouchTrigger(0);
      setRectanglesLeaving(false);
      setRectanglesShow(false);
      setProjectListShow(true);
    }, 2000);
  };

  const handleTouchStart = () => {
    console.log('handleTouchStart, selectedCard: ', selectedCard);
    if(selectedCard == "Home") {
      setWhiteScreenShow(false); 
    } else {
      setWhiteScreenShow(true); 
    }
    setRectanglesShow(true);
    setTouchTrigger((prev) => prev + 1);
    setProjectListShow(false);
  };

  const handleSliderMove = (swiper: any) => {
    const diffX = swiper.touches.diff;    // 현재 드래그 중인 X축 변화량 (오른쪽: 양수, 왼쪽: 음수)
    setSwiperX(diffX);
    // console.log('diffX: ', diffX);
  }

  return (
    <div className="App">
      <MovingStars/>
      
      <div className="preload-instructions">
        <h1>Welcome to Boo JaeSik's Portfolio</h1>
      </div>

      {isWhiteScreenShow && (
        <div className='full-white-screen'>
          <div className='full-screen-content'>
            {/* <h2>{selectedCard} Content Screen</h2>
            <p>여기에 {selectedCard} 메뉴의 상세 내용을 자유롭게 디자인하시면 됩니다.</p> */}

            {isProjectListShow && (<ProjectsGroup projects={projectList}/>)}
          </div>
        </div>
      )}

      {isRectanglesShow && (
        <RandomRectangles triggerKey={touchTrigger} translateX={swiperX} isLeaving={isRectanglesLeaving}/>
      )}

      
      {/* ⭐️ Swiper 하단 중앙 캐러셀 */}
      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]} // 네비게이션(좌우 버튼) 모듈 장착
          navigation // 기본 좌우 화살표 활성화
          spaceBetween={20} // 슬라이드 사이 간격 (20px)
          slidesPerView={4} // 한 번에 보여줄 슬라이드 수 (기본값)
          centeredSlides={true} // 활성화된 슬라이드를 중앙에 배치
          loop={false} // 끝까지 가면 처음으로 무한 반복 x
          onSlideChange={handleSlideChange}
          onSliderMove={handleSliderMove}
          onTouchStart={() => { handleTouchStart(); }}
          onTouchEnd={() => { handleTouchEnd(); }}
          breakpoints={{
            // 반응형 레이아웃 설정
            480: { slidesPerView: 2 }, // 화면 폭 480px 이상일 때 2개
            768: { slidesPerView: 3 }, // 화면 폭 768px 이상일 때 3개
          }}
          className="mySwiper"
        >
          {menu.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-card">
                <h3>{item}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
		
		</div>

  );
}

export default App;

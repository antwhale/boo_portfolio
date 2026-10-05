import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useLayoutEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { ProjectInfo } from "../const/project_info"

interface ProjectCarouselProps {
  projects: ProjectInfo[];
  onClickProject?: (index: number) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onClickProject }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const trackOffsetRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const centerActiveSlide = () => {
      const wrapper = wrapperRef.current;
      const activeSlide = slideRefs.current[activeIndex];
      if (!wrapper || !activeSlide) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const slideRect = activeSlide.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
      const slideCenter = slideRect.left + slideRect.width / 2;
      const nextOffset = trackOffsetRef.current + wrapperCenter - slideCenter;

      if (Math.abs(nextOffset - trackOffsetRef.current) > 0.5) {
        trackOffsetRef.current = nextOffset;
        setTrackOffset(nextOffset);
      }
    };

    centerActiveSlide();
    window.addEventListener('resize', centerActiveSlide);
    return () => window.removeEventListener('resize', centerActiveSlide);
  }, [activeIndex, projects]);

  const toPrev = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  }

  const toNext = () => {
    setActiveIndex(prev => Math.min(projects.length - 1, prev + 1));
  }

  const toSlide = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <div className="project-carousel-container">
      {/* project carousel wrapper */}
      <div className="project-carousel-wrapper" ref={wrapperRef}>
        {/* slides container */}
        <motion.div 
          className="slides-container"
          animate={{ x: trackOffset }}
          style={{ width: `${projects.length * 100}%` }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
        >
          {projects.map((project, i) => {
            const isActive = activeIndex === i;
            console.log(`i: ${i} / imageDirection: ${project.imageDirection}`);
            return (
              <div 
                className="slide-item" 
                key={i} 
                ref={(element) => { slideRefs.current[i] = element; }}
                style={{ flex: `0 0 ${100 / projects.length}%` }}
              >
                <motion.div 
                  className="slide-content"
                  style={{
                    width: project.imageDirection === 'v' ? '240px' : '480px',
                    aspectRatio: project.imageDirection === 'v' ? '9 / 16' : '16 / 9',
                  }}
                  animate={{ rotateY: (activeIndex - i) * 60, scale: isActive ? 1 : 0.85  }}
                  transition={{ type: 'spring', bounce: 0.1, duration: 1 }}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="slide-image"
                    onClick={() => {
                      if (isActive) {
                        onClickProject?.(i);
                        return;
                      }

                      toSlide(i);
                    }}
                  />
                </motion.div>
                <motion.div
                  className="slide-text"
                  style={{ width: project.imageDirection === 'v' ? '240px' : '480px' }}
                  animate={{ filter: isActive ? 'blur(0)' : 'blur(2px)', opacity: isActive ? 1 : 0 }}
                >
                  <h3 className="slide-title">{project.title}</h3>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* controls */}
      {/* <div className="carousel-controls">
        <button 
          onClick={toPrev} 
          disabled={activeIndex === 0} 
          className="control-button"
        >
          <ChevronLeft />
        </button>
        
        <div className="dots-container">
          {projects.map((_, i) => (
            <div 
              key={i} 
              onClick={() => toSlide(i)}
              className={`dot ${activeIndex === i ? 'active' : 'inactive'}`}
            ></div>
          ))}
        </div>
        
        <button 
          onClick={toNext} 
          disabled={activeIndex === projects.length - 1} 
          className="control-button"
        >
          <ChevronRight />
        </button>
      </div> */}
    </div>
  );
};
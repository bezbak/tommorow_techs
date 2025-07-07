import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AnimatedLine = () => {
  const lineRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (!lineRef.current) return;
    
    // Создаем новый экземпляр анимации для каждого компонента
    animationRef.current = gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "300px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "center 85%",
          end: "center 2%",
          scrub: true,
          markers: false,
          // Очищаем триггеры при размонтировании
          onRefresh: self => self.animation && self.animation.progress(0),
          onUpdate: self => {
            if (self.direction === -1) {
              gsap.set(lineRef.current, { height: `${100 * self.progress}px` });
            }
          }
        }
      }
    );
    
    // Очистка при размонтировании
    return () => {
      if (animationRef.current && animationRef.current.scrollTrigger) {
        animationRef.current.scrollTrigger.kill();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={lineRef}
      style={{
        width: "2px",
        marginTop: "62px",
        marginBottom: "78px",
        background: "linear-gradient(0deg, rgb(255 255 255 / 22%) 32.71%, rgba(0, 0, 0, 0) 88.12%)"
      }}
    />
  );
};

export default AnimatedLine;
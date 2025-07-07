import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.scss'; // Создадим этот файл

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Анимация логотипа и прогресса
    const tl = gsap.timeline();
    
    // Анимация логотипа
    tl.to(logoRef.current, {
      scale: 1.2,
      rotation: 5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    // Анимация прогресс-бара
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut"
    }, "<");
    
    // Симуляция загрузки (в реальном проекте замените на реальную проверку)
    const loadTimer = setTimeout(() => {
      // Завершаем анимацию
      tl.kill();
      
      // Анимация скрытия прелоадера
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsVisible(false)
      });
    }, 3000);

    return () => {
      clearTimeout(loadTimer);
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="preloader">
      <div className="preloader__content">
        <div ref={logoRef} className="preloader__logo">
          <svg viewBox="0 0 100 100" className="preloader__logo-svg">
            <path 
              d="M50,10 L70,40 L60,70 L40,70 L30,40 Z" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="preloader__progress-container">
          <div ref={progressRef} className="preloader__progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
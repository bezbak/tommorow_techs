import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.scss'; // Создадим этот файл
import logo from './logo.mp4'
const Preloader = ({ setIsLoading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const videoRef = useRef(null);

  // Анимация логотипа
  useEffect(() => {
    const tl = gsap.timeline();

    // Анимация прогресс-бара
    tl.to(progressRef.current, {
      width: "100%",
      duration: 6,
      ease: "power2.inOut"
    });

    // Событие завершения видео
    const handleVideoEnd = () => {
      tl.kill(); // остановим анимации, если они всё ещё активны

      gsap.to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsVisible(false);
          setIsLoading(false);
        }
      });
    };

    const video = videoRef.current;
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      tl.kill();
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [setIsLoading]);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="preloader">
      <div className="preloader__content">
        <video
          ref={videoRef}
          className="preloader__video"
          src={logo}
          autoPlay
          muted
          playsInline
        />
        <div className="preloader__progress-container">
          <div ref={progressRef} className="preloader__progress" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
// components/SmoothScroll.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const scrollContainer = useRef(null);
  const scrollContent = useRef(null);
  const animationFrameId = useRef(null);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    const container = scrollContainer.current;
    const content = scrollContent.current;
    
    // Устанавливаем высоту контента
    const setContentHeight = () => {
      content.style.height = `${container.scrollHeight}px`;
    };
    
    setContentHeight();
    window.addEventListener('resize', setContentHeight);

    // Параметры скролла
    const scrollSpeed = 0.05;
    const maxDelta = 100;

    // Создаем прокси-объект для ScrollTrigger
    const scrollProxy = {
      scrollTop: 0,
      addEventListener: () => {},
      removeEventListener: () => {},
      scrollTo: (value) => {
        targetScroll.current = value;
        if (!animationFrameId.current) {
          animationFrameId.current = requestAnimationFrame(smoothScroll);
        }
      }
    };

    // Функция плавного скролла
    const smoothScroll = () => {
      const diff = targetScroll.current - currentScroll.current;
      const delta = Math.sign(diff) * Math.min(Math.abs(diff) * scrollSpeed, maxDelta);
      
      currentScroll.current += delta;
      content.style.transform = `translateY(${-currentScroll.current}px)`;
      
      // Обновляем прокси для ScrollTrigger
      scrollProxy.scrollTop = currentScroll.current;
      
      if (Math.abs(diff) > 0.5) {
        animationFrameId.current = requestAnimationFrame(smoothScroll);
      } else {
        animationFrameId.current = null;
      }
    };

    // Обработчик скролла
    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll.current += e.deltaY;
      targetScroll.current = Math.max(0, targetScroll.current);
      targetScroll.current = Math.min(
        container.scrollHeight - window.innerHeight, 
        targetScroll.current
      );
      
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(smoothScroll);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // Инициализация ScrollTrigger
    const initScrollTrigger = () => {
      // Настраиваем прокси для ScrollTrigger
      ScrollTrigger.scrollerProxy(container, {
        scrollTop(value) {
          if (arguments.length) {
            scrollProxy.scrollTop = value;
            targetScroll.current = value;
            content.style.transform = `translateY(${-value}px)`;
            currentScroll.current = value;
          }
          return scrollProxy.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });

      // Обновляем ScrollTrigger
      ScrollTrigger.defaults({
        scroller: container
      });

      ScrollTrigger.refresh();
      setScrollReady(true);
    };

    // Инициализируем после небольшой задержки
    const initTimeout = setTimeout(initScrollTrigger, 100);
    
    return () => {
      clearTimeout(initTimeout);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', setContentHeight);
      cancelAnimationFrame(animationFrameId.current);
      
      // Уничтожаем все ScrollTrigger анимации
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      content.style.height = '';
      content.style.transform = '';
      window.scrollTo(0, currentScroll.current);
    };
  }, []);

  return (
    <div 
      ref={scrollContainer} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <div ref={scrollContent} style={{ willChange: 'transform' }}>
        {scrollReady ? children : null}
      </div>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import lol from './AboutMission.module.scss';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import AnimatedLine from '../AnimatedLine/AnimatedLine';

const AboutMission = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Определение мобильных устройств
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
      console.log(window.innerWidth);
      console.log(window.innerWidth <= 900);
      
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Обработчики для слайдера
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? 4 : prev - 1));
  };

  // Автопрокрутка слайдера
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  // Карточки для слайдера
  const cards = [
    {
      icon: icon1,
      title: "Сделать бизнес удобным",
      description: "Весь рутинный процесс в вашей деятельности оцифровывается и дает большие возможности для улучшения"
    },
    {
      icon: icon2,
      title: "Инновации",
      description: "Новые технологии и решения, что способствует инновациям и созданию конкурентных преимуществ."
    },
    {
      icon: icon3,
      title: "Безопасность и защита",
      description: "Включают в себя средства и методы для защиты информации и данных от киберугроз и утечек"
    },
    {
      icon: icon4,
      title: "Создание ценности",
      description: "Мы верим, что технологии могут помочь вам создать долгосрочную ценность для вашей компании и ваших клиентов."
    },
    {
      icon: icon5,
      title: "Цифровая трансформация",
      description: "Мы поддерживаем вас в вашем пути к цифровой трансформации, что помогает укрепить конкурентоспособность"
    }
  ];

  return (
    <>
      <div className={lol.liner}></div>
      <div className={lol.AboutMission}>
        <h2>Наша миссия</h2>
        <div className={lol.dynamicContainer} ref={containerRef}>
          {/* Десктопная версия */}
          {!isMobile && (
            <main>
              <div className={lol.blockFlex}>
                <div className={lol.top}>
                  <img src={icon1} alt='' />
                  <div className={lol.txt}>
                    <h3>Сделать бизнес удобным</h3>
                    <p>
                      Весь рутинный процесс в вашей деятельности оцифровывается и дает большие возможности для улучшения
                    </p>
                  </div>
                </div>
                <div className={lol.top}>
                  <img src={icon2} alt='' />
                  <div className={lol.txt}>
                    <h3>Инновации</h3>
                    <p>Новые технологии и решения, что способствует инновациям и созданию конкурентных преимуществ.</p>
                  </div>
                </div>
              </div>
              <div className={lol.blockFlex}>
                <div className={lol.bottom}>
                  <img src={icon3} alt='' />
                  <div className={lol.text}>
                    <h3>Безопасность и защита</h3>
                    <p>Включают в себя средства и методы для защиты информации и данных от киберугроз и утечек</p>
                  </div>
                </div>
                <div className={lol.bottom}>
                  <img src={icon4} alt='' />
                  <div className={lol.text}>
                    <h3>Создание ценности</h3>
                    <p>
                      Мы верим, что технологии могут помочь вам создать долгосрочную ценность для вашей компании и ваших
                      клиентов.
                    </p>
                  </div>
                </div>
                <div className={lol.bottom}>
                  <img src={icon5} alt='' />
                  <div className={lol.text}>
                    <h3>Цифровая трансформация</h3>
                    <p>
                      Мы поддерживаем вас в вашем пути к цифровой трансформации, что помогает укрепить
                      конкурентоспособность
                    </p>
                  </div>
                </div>
              </div>
            </main>
          )}

          {/* Мобильная версия - слайдер */}
          {isMobile && (
            <div className={lol.sliderContainer}>
              <div 
                className={lol.slider} 
                ref={sliderRef}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cards.map((card, index) => (
                  <div 
                    key={index} 
                    className={`${lol.slide} ${currentSlide === index ? lol.active : ''}`}
                  >
                    <div className={lol.card}>
                      <img src={card.icon} alt={card.title} />
                      <div className={lol.content}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Навигация слайдера */}
              <div className={lol.sliderNav}>
                <button onClick={prevSlide} className={lol.prevBtn}>
                  &lt;
                </button>
                <div className={lol.dots}>
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      className={`${lol.dot} ${currentSlide === index ? lol.activeDot : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className={lol.nextBtn}>
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <center>
        <AnimatedLine />
      </center>
    </>
  )
}

export default AboutMission;
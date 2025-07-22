import React, { useState, useEffect } from 'react';
import scss from './safariDashboard.module.scss';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardLeft from './DashboardLeft/DashboardLeft';
import DashboardRight from './DashboardRight/DashboardRight';
import './dashboard.scss';

const FigmaDashboard = ({isLoading}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    // console.log(window.scrollY);

  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Рассчитываем трансформацию только для широких экранов
  const startScroll = 160;    // Начало анимации
  const endScroll = 540;      // Конец анимации (увеличен с 450)
  const maxRotation = 55.57;  // Сохраняем исходный конечный угол

  // Рассчитываем трансформацию для широких экранов
  const rotationValue = windowWidth >= 865
    ? (scrollPosition >= startScroll
      ? (scrollPosition < endScroll
        // Линейная интерполяция между началом и концом
        ? (scrollPosition - startScroll) * (maxRotation / (endScroll - startScroll))
        : maxRotation)  // Фиксируем значение после завершения анимации
      : 0)
    : 0;

  return (
    <div style={{
      transform: windowWidth >= 865
        ? `rotate3d(1,0,0,-${rotationValue}deg)`
        : 'none',
      transformOrigin: 'top'
    }}>
      <div className={`size-1200 ${scss.dashboard} ${scss.custom_cursor}`} id='dashboard'>
        <DashboardHeader />
        <div className={scss.dashboard_main}>
          <DashboardLeft isLoading={isLoading} />
          <div className={scss.comment_wrap}>
            <div className={scss.dashboard_comment}>
              <div className={scss.dashboard_comment_arrow}>➤</div>
              <div className={scss.dashboard_comment_text}>Adilet</div>
            </div>
          </div>
          <DashboardRight />
        </div>
      </div>
    </div>
  );
}

export default FigmaDashboard;


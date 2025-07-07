import React, { useState, useEffect } from 'react';
import scss from './safariDashboard.module.scss';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardLeft from './DashboardLeft/DashboardLeft';
import DashboardRight from './DashboardRight/DashboardRight';
import './dashboard.scss';

const FigmaDashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
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
  const rotationValue = windowWidth >= 865 
    ? (scrollPosition >= 210 
        ? (scrollPosition < 450 
            ? scrollPosition / 3.5 - 40 
            : 450 / 3.5 - 210)
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
          <DashboardLeft />
          <div className={scss.comment_wrap}>
            <div className={scss.dashboard_comment}>
              <div className={scss.dashboard_comment_arrow}>➤</div>
              <div className={scss.dashboard_comment_text}>Adilet</div>
            </div>
            <div className={scss.dashboard_comment}>
              <div className={scss.dashboard_comment_arrow}>➤</div>
              <div className={scss.dashboard_comment_text}>PUBG777</div>
            </div>
          </div>
          <DashboardRight />
        </div>
      </div>
    </div>
  );
}

export default FigmaDashboard;


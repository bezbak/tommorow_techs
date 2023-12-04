import React ,{useState,useEffect} from 'react'
import scss from './safariDashboard.module.scss'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardLeft from './DashboardLeft/DashboardLeft'
import DashboardRight from './DashboardRight/DashboardRight'
import  './dashboard.scss'

const FigmaDashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{  transform: `rotate3d(1,0,0,-${scrollPosition>=40  ?(scrollPosition<450?scrollPosition / 3.5:450/3.5)-40:0}deg) ` ,transformOrigin:'top'}}>

    <div className={`size-1200 ${scss.dashboard} ${scss.custom_cursor} `} id='dashboard' >
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
  )
}

export default FigmaDashboard
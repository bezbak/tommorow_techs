import React, { useState, useEffect } from 'react'
import scss from './dashboardLeft.module.scss'
import upSrc from './up.svg'

const DashboardLeft = ({ isLoading }) => {
  const [showH3, setShowH3] = useState(false);

  const text = `Расширяйте горизонты бизнеса с помощью цифровизации`;
  const delay = 30; // скорость
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isLoading) {
      const printText = (text, index) => {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(index));
          setTimeout(() => {
            printText(text, index + 1);
          }, delay);
          if (index == 26) {
            setShowH3(true);

          }
        }
      };
      printText(text, 0);
    }

  }, [isLoading]);

  return (
    <div className={scss.dashboardLeft}>

      <button className={scss.dashboardLeft_btn}>Даем новую жизнь бизнесу <img src={upSrc} alt="" /></button>
      <h1 className={scss.text_wrap}>{displayText}<span className={scss.line_type}></span></h1>
      {showH3 && (
        <>
          <h3>
            Tomorrow-Techs : Наша миссия - помогать бизнесу расти с помощью IT-технологий
            <div className={scss.dashboard_comment}>
              <div className={scss.dashboard_comment_arrow}>➤</div>
              <div className={scss.dashboard_comment_text}>PUBG777</div>
            </div>
          </h3>
          <button className={scss.dashboardLeft_btn}>Узнать больше</button>
        </>
      )}
    </div>
  )
}

export default DashboardLeft
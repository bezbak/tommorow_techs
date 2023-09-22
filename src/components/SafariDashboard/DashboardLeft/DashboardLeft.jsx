import React,{useState,useEffect} from 'react'
import scss from './dashboardLeft.module.scss'
import upSrc from './up.svg'

const DashboardLeft = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const text = `Расширяйте горизонты бизнеса с помощью цифровизации`;
  const delay = 30; // скорость
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const printText = (text, index) => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setTimeout(() => {
          printText(text, index + 1);
        }, delay);
      }
    };

    printText(text, 0);
  }, []);

  return (
    <div className={scss.dashboardLeft}>
    
          <button className={scss.dashboardLeft_btn}>Даем новую жизнь бизнесу <img src={upSrc} alt="" /></button>
    <h1 className={scss.text_wrap}>{displayText}<span className={scss.line_type}></span></h1>
          <h3>Tomorrow-Techs : Наша миссия - помогать бизнесу расти с помощью IT-технологий</h3>
          <button className={scss.dashboardLeft_btn}>Узнать больше</button>
    </div>
  )
}

export default DashboardLeft
import React, { useRef, useEffect } from 'react';
import img_1 from '../img/portfolioImg_1.png';
import img_2 from '../img/portfolioImg_2.png';
import img_3 from '../img/portfolioImg_3.png';
import classes from './Portfolio2.module.scss';

const Portfolio2 = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = portfolioRef.current.querySelectorAll(`.${classes.portfolio_item}`);
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        el.classList.toggle(classes.visible, isVisible);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.portfolio_wrapper}>
      {/* <div className={classes.header}>
        <h2 className={classes.subtitle}>Bullets to visuals in a click.</h2>
        <p className={classes.description}>Transform any widget into another to try different options, without any design hassle</p>
      </div> */}
      
      <div className={classes.portfolio} ref={portfolioRef}>
        <div className={`${classes.portfolio_item} ${classes.visible}`}>
          <div className={classes.portfolio_item_text} >
            <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
            <h1 className={classes.portfolio_item_text_title}>Kelvin</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>
          </div>
          <div className={classes.portfolio_item_img} >
            <img src={img_1} alt="Project Kelvin" />
          </div>
        </div>

        <div className={classes.portfolio_item}>
          <div className={classes.portfolio_item_text} >
            <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
            <h1 className={classes.portfolio_item_text_title}>Ош ТВ</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>
          </div>
          <div className={classes.portfolio_item_img} >
            <img src={img_2} alt="Project Ош ТВ" />
          </div>
        </div>

        <div className={classes.portfolio_item}>
          <div className={classes.portfolio_item_text} >
            <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
            <h1 className={classes.portfolio_item_text_title}>Karagay</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>
          </div>
          <div className={classes.portfolio_item_img} >
            <img src={img_3} alt="Project Karagay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio2;
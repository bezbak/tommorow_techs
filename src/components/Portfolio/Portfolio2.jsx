import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import img_1 from '../img/portfolioImg_1.png';
import img_2 from '../img/portfolioImg_2.png';
import img_3 from '../img/portfolioImg_3.png';
import classes from './Portfolio2.module.scss';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Portfolio2 = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    const content = contentRef.current;
    const contentWidth = content.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = (contentWidth+400) - windowWidth;

    gsap.to(content, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers:true
      }
    });
  }, []);

  return (
    <div className={classes.portfolio_wrapper}>
      {/* Вот наша «секция», которая растягивается по высоте */}
      <div
        ref={wrapperRef}
        className={classes.stickyWrapper}
      >
        {/* А вот «контент», который будет «прилипать» наверху и ездить по Х */}
        <div className={classes.overflowHidden}>
          <div ref={contentRef} className={classes.horizontalContent}>
            {/* Здесь исходный portfolio-блок */}
            <div className={classes.portfolio}>
              <div className={`${classes.portfolio_item}`}>
                <div className={classes.portfolio_item_text}>
                  <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
                  <h1 className={classes.portfolio_item_text_title}>Kelvin</h1>
                  <p className={classes.portfolio_item_text_text}>
                    Ну кароче там текст вроде как 123 и так далее...
                  </p>
                </div>
                <div className={classes.portfolio_item_img}>
                  <img src={img_1} alt="Project Kelvin" />
                </div>
              </div>

              <div className={classes.portfolio_item}>
                <div className={classes.portfolio_item_text}>
                  <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
                  <h1 className={classes.portfolio_item_text_title}>Ош ТВ</h1>
                  <p className={classes.portfolio_item_text_text}>
                    Ну кароче там текст...
                  </p>
                </div>
                <div className={classes.portfolio_item_img}>
                  <img src={img_2} alt="Project Ош ТВ" />
                </div>
              </div>

              <div className={classes.portfolio_item}>
                <div className={classes.portfolio_item_text}>
                  <a href="#" className={classes.portfolio_item_text_link}>Портфолио</a>
                  <h1 className={classes.portfolio_item_text_title}>Karagay</h1>
                  <p className={classes.portfolio_item_text_text}>
                    Ну кароче там текст...
                  </p>
                </div>
                <div className={classes.portfolio_item_img}>
                  <img src={img_3} alt="Project Karagay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;

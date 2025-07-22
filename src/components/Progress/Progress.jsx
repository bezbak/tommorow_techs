import React, { useEffect, useState, useRef } from 'react';
import c from './Progress.module.scss';
import img6 from '../Image/img6.png'
import img5 from '../Image/img5.png'
import poly from '../Image/poly.png'
import led from '../Image/led.png'
import face1 from '../Image/Group.png'
import osh from '../Image/osh.png'
import gerb from '../Image/gerb.png'
import kelvin from '../Image/kelvin.png'
import link_img from '../Innovations/image/link_img';

const Progress = () => {
  const [hoverCard, setHoverCard] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false);
  const [value1, setValue1] = useState(0); // для 15
  const [value2, setValue2] = useState(0); // для 19
  const counterRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(0, 15, 1000, setValue1);
          animateValue(0, 19, 1000, setValue2);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };


  return (
    <div className={c.parent} ref={counterRef}>
      <div className={c.main__Progres}>
        <div className={c.main__progres__text}>
          <span>Рост потока клиентов</span>
          <h2>
            Открываем новые источники потока клиентов
          </h2>
          <p>
            Мы создаем сайты и приложения, которые не только привлекают внимание, но и генерируют результаты. Доверьтесь профессионалам и увидите, как ваш бизнес начнет привлекать новых клиентов еще быстрее!
          </p>
        </div>
        <div className={c.temporarily}>
          <div className={c.temporarily__inner}>
            <div className={c.top}>
              <div className={c.butt}>Март 2024</div>
              <div className={c.butt_2}>Действие пользователей</div>
            </div>
            <div className={c.center}>
              <h1>{value1},{value2.toString().padStart(2, "0")}k</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M8 0L15.7942 13.5H0.205771L8 0Z" fill="#44E760" />
              </svg>
              +39%(total)
            </div>
            <div className={c.bottom}>
              <div className={c.lines}>
                <svg className={c.svg_1} xmlns="http://www.w3.org/2000/svg" width="452" height="106" viewBox="0 0 452 106" fill="none">
                  <path className={c.lol} d="M1 216L49.9896 200.442C54.8057 198.912 60.5374 193.7 62.7807 188.809L73.2839 165.91C75.5272 161.019 81.4023 157.479 86.3949 158.01L124.201 162.031C129.193 162.562 135.597 159.367 138.492 154.901L157.542 125.509C160.436 121.043 166.82 118.029 171.789 118.782L206.047 123.978C211.015 124.732 215.561 120.939 216.191 115.514L221.856 66.7738C222.486 61.3491 226.747 55.2085 231.364 53.0703L249.857 44.5056C254.474 42.3674 260.598 44.2372 263.525 48.6783L299.274 102.93C302.201 107.371 305.883 106.772 307.493 101.593L320.748 58.9325C322.357 53.7534 327.528 50.9523 332.287 52.6815L369.576 66.2309C374.335 67.9601 380.05 65.4093 382.33 60.5385L396.791 29.6412C399.071 24.7704 404.84 19.604 409.666 18.1116L465 1" stroke="url(#paint0_linear_6_44)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear_6_44" x1="154.152" y1="58.4654" x2="278.298" y2="-16.8757" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#765DF3" />
                      <stop offset="0.5" stopColor="#8E79F8" />
                      <stop offset="1" stopColor="#A594FD" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg className={c.svg_2} xmlns="http://www.w3.org/2000/svg" width="461" height="255" viewBox="0 0 461 255" fill="none">
                  <path className={c.lol2} d="M0 254L28.288 174.406C29.7346 170.336 33.629 165.08 36.979 162.676L70.2937 138.773C73.6437 136.369 79.0585 136.41 82.3776 138.864L115.804 163.574C119.123 166.027 124.254 165.666 127.254 162.767L173.655 117.928C176.655 115.029 180.561 115.838 182.371 119.732L218.538 197.53C220.348 201.424 224.955 205.545 228.82 206.725L264.135 217.518C267.999 218.698 272.779 216.598 274.803 212.829L292.015 180.777C294.039 177.009 298.936 174.143 302.944 174.382L338.193 176.481C342.201 176.72 345.817 173.393 346.264 169.057L357.372 61.236C357.819 56.8997 361.436 53.1824 365.443 52.9403L400.011 50.8526C404.019 50.6106 409.741 48.1008 412.781 45.2518L460 1" stroke="url(#paint0_linear_6_460)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 8" />
                  <defs>
                    <linearGradient id="paint0_linear_6_460" x1="27.6773" y1="216.522" x2="454.097" y2="29.8665" gradientUnits="userSpaceOnUse">
                      <stop offset="0.18" stopColor="white" stopOpacity="0.1" />
                      <stop offset="0.59" stopColor="white" stopOpacity="0.2" />
                      <stop offset="1" stopColor="white" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
              <div className={c.line}>
                1.1k
                <hr />
              </div>
              <div className={c.line}>
                0.8k
                <hr />
              </div>
              <div className={c.line}>
                0.6k
                <hr />
              </div>
              <div className={c.line}>
                0.4k
                <hr />
              </div>
              <div className={c.line}>
                0.2k
                <hr />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={c.main__pages__cards}>
        <div className={c.main__card}>
          <div className={c.card__parent}>
            <div className={c.temporarily__div}>

              <div onMouseMove={() => setHoverCard(1)} onMouseOut={() => setHoverCard(0)} className={`${c.Svg_5} ${c.block} ${hoverCard == 1 ?
                c.anim1 :
                hoverCard == 2 ?
                  c.anim2 :
                  ''
                }`}>

                <div className={c.Svg_5top}>
                  <img src={link_img.magic} alt="" />
                  <span>За последние 6 месяцев</span>
                </div>
                <div className={c.Svg_5_bottom}>
                  <h2>15+</h2>
                  <p>Выполненных проектов с высоким качеством</p>
                </div>
              </div>

              <div onMouseMove={() => setHoverCard(2)} onMouseOut={() => setHoverCard(0)} className={`${c.Svg_7} ${c.block} ${hoverCard == 1 ?
                c.anim1 :
                hoverCard == 2 ?
                  c.anim2 :
                  ''
                }`}>
                <span>Статистика</span>
                <h2>Трафик</h2>
                <div className={c.Svg_7_bottom}>
                  <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                      <img src={link_img.insta} alt="" />
                      <b>instagram</b>
                    </div>
                    <div className={c.followers}>
                      641k
                    </div>
                    <div className={c.progress}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                      </svg>
                      +15%
                    </div><hr />
                  </div>
                  <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                      <img src={link_img.twitter} alt="" />
                      <b>twitter</b>
                    </div>
                    <div className={c.followers}>
                      115k
                    </div>
                    <div className={c.progress}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                      </svg>
                      +7%
                    </div><hr />
                  </div>
                  <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                      <img src={link_img.facebook} alt="" />
                      <b>facebook</b>
                    </div>
                    <div className={c.followers}>
                      90k
                    </div>
                    <div className={c.progress}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                      </svg>
                      +5%
                    </div><hr />
                  </div>
                  <div className={c.Svg_7_bottom_block}>
                    <div className={c.massage}>
                      <img src={link_img.youtube} alt="" />
                      <b>youtube</b>
                    </div>
                    <div className={c.followers}>
                      12k
                    </div>
                    <div className={c.progress}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                        <path d="M3.15723 0.5L6.18832 5.75H0.126138L3.15723 0.5Z" fill="#44E760" />
                      </svg>
                      +3%
                    </div><hr />
                  </div>
                </div>

              </div>

            </div>

            <div className={c.info__text}>
              <span>Рост бизнеса</span>
              <h2>
                С нами ваш бизнес будет расти без ограничений
              </h2>
              <p>
                Мы создаем возможности для беспрецедентного развития и успеха вашей компании
              </p>
            </div>
          </div>
        </div>
        <div className={c.main__card + ' ' + c.c2}>
          <div className={c.card__parent}>
            <div>
              <div className={c.temporarily__divs}>
                <div className={c.block + ' ' + c.c4}>

                </div>
                <div className={c.block + ' ' + c.c2}>
                  <img className={c.otstup} src={kelvin} alt="" />
                </div>
                <div className={c.block + ' ' + c.c1}>
                  <img className={c.otstup} src={gerb} alt="" />
                </div>
                <div className={c.block + ' ' + c.c2}>
                  <img className={c.otstup} src={led} alt="" />
                </div>
                <div className={c.block + ' ' + c.c4}>

                </div>
                <div className={c.block + ' ' + c.c3}>

                </div>
                <div className={c.block + ' ' + c.c1}>
                  <img className={c.otstup} src={osh} alt="" />
                </div>
                <div className={c.block__main}>
                  <img src={img5} alt="" />
                </div>
                <div className={c.block + ' ' + c.c1}>
                  <img src={img6} alt="" />
                </div>
                <div className={c.block + ' ' + c.c3}>

                </div>
                <div className={c.block + ' ' + c.c4}>

                </div>
                <div className={c.block + ' ' + c.c2}>

                </div>
                <div className={c.block + ' ' + c.c1}>

                </div>
                <div className={c.block + ' ' + c.c2}>

                </div>
                <div className={c.block + ' ' + c.c4}>

                </div>
              </div>
            </div>
            <div className={c.info__text__2}>
              <span>Наши партнеры</span>
              <h2>
                Сильные партнерства — ключевой элемент успеха!
              </h2>
              <p>
                Среди наших партнеров ведущие компании и стартапы,
                с которыми мы сотрудничаем для создания   инновационных решений
                в сфере разработки веб-сайтов и приложений.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

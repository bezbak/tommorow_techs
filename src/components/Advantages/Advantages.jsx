import React,{useState,useEffect} from 'react'
import scss from './advantages.module.scss'
import dottetSrc from './Rectangle 38.svg'
const Advantages = () => {
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
    <div className={`size-1400 ${scss.advantages} advantages`}>
      <div className={scss.advantages_text}>
        <h3>Ну кароче тут текст про преимущества</h3>
        <h1>In Chronicle everything is made
          with Blocks that come with </h1>
      </div>
      <div className={scss.advantages_container_wrap}>


      <div className={scss.advantages_container}>
        <div className={scss.advantages_block}>
          <div className={scss.advantages_block_text}>
            <h2 className={scss.advantages_block_text_header}>
              Автоматизация
              процессов
            </h2>
            <p className={scss.advantages_block_text_body}>
              мы поможем вам оптимизировать и автоматизировать внутренние процессы, такие как учет, управление проектами, коммуникации и другие, что значительно повысит производительность и уменьшит рутинную работу.
            </p>
          </div>
        </div>
        <div className={scss.advantages_block}>
          <div className={scss.advantages_block_text}>
            <h2 className={scss.advantages_block_text_header}>
              Разработка и поддержка построения веб-сайта:
            </h2>
            <p className={scss.advantages_block_text_body}>
              мы создадим для вас высококачественный и привлекательный веб-сайт, который поможет вам привлечь новых клиентов, предоставить им необходимую информацию о вашей компании и услугах, а также обеспечит удобство взаимодействия.
            </p>
          </div>
        </div>
        <div className={scss.advantages_block}>

          <div className={scss.advantages_block_text}>
            <h2 className={scss.advantages_block_text_header}>
              Автоматизация
              процессов
            </h2>
            <p className={scss.advantages_block_text_body}>
              мы поможем вам оптимизировать и автоматизировать внутренние процессы, такие как учет, управление проектами, коммуникации и другие, что значительно повысит производительность и уменьшит рутинную работу.
            </p>
          </div>

        </div>
      </div>
      </div>
      <div className={scss.sliders_wrap}>


      <div className={scss.sliders} >


        <div className={scss.slider} style={{transform:`translateX(-${scrollPosition/2}px)`,}}> <div className={scss.slide}> <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
          <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}>
            <img src={dottetSrc} alt="" />
          </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
          <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}>
            <img src={dottetSrc} alt="" />
          </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
          <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}>
            <img src={dottetSrc} alt="" />
          </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1> </div></div>
        <div className={scss.slider} style={{transform:`translateX(-${scrollPosition/3-100}px)`}}>
          <div className={scss.slide}>
            <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ
            </h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
            <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1><div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>    <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
          <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}>
            <img src={dottetSrc} alt="" />
          </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>   <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div>
          <h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}>
            <img src={dottetSrc} alt="" />
          </div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1>
          <div className={scss.slide_dotted}><img src={dottetSrc} alt="" /></div><h1>ПРИСОЕДИНЯЙТЕСЬ К НАМ</h1></div>
        </div>
      </div>
       </div>
    </div>
  )
}

export default Advantages

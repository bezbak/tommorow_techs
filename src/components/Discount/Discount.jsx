import React from 'react'
import scss from './discount.module.scss'
import notebookSrc from './notebook.svg'
import abstractLensesSrc from './abstract lenses.svg'
import bloorCircleSrc from './bloorCircle.svg'
import figureSrc from './Graphic.png'
import InfinitySlider from './infinitySlider/InfinitySlider'
import TimeCount from './TimeCount/TimeCount'
const Discount = () => {
  return (
    <>
      <div className={`${scss.discount}`} >
        <div className={scss.discount_wrap}>


          <div className={scss.discount_block}>

            <div className={scss.discount_sliders}>
              <div className={scss.discount_slider}>
                <InfinitySlider />
              </div>
              <div className={scss.discount_slider}>
                <InfinitySlider />
              </div>
            </div>
            <img src={notebookSrc} alt="" /></div>
          <div className={scss.discount_block}>Скидки на сайты до 50%</div>
          <div className={scss.discount_block}><TimeCount/></div>   
          <div className={scss.discount_block}><button>Выбрать сайт</button> <img src={figureSrc} alt="" /> </div>
          <img src={abstractLensesSrc} className={scss.abstractLenses} alt="" />
          <img src={bloorCircleSrc} className={scss.bloorCircle} alt="" />
        </div>


          {/* <div className={scss.discount_block}><img src={notebookSrc} alt="" /></div>
          <div className={scss.discount_block}>Скидки на сайты до 50%</div>
          <div className={scss.discount_block}>3д : 10ч : 12мин : 39сек</div>
          <div className={scss.discount_block}><button>Выбрать сайт</button>  </div>
          <img src={abstractLensesSrc} className={scss.abstractLenses} alt="" />
          <img src={bloorCircleSrc} className={scss.bloorCircle} alt="" />
          */}

          {/* <img src={mugSrc} alt="" className={mugSrc}/> */}
        </div>

      {/* </div>
      </div> */}

    </>

  )
}

export default Discount
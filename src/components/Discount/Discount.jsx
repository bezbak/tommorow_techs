import React from 'react';
import scss from './discount.module.scss';
import notebookSrc from './notebook.svg';
import abstractLensesSrc from './abstract lenses.svg';
import bloorCircleSrc from './bloorCircle.svg';
import figureSrc from './Graphic.png';
import InfinitySlider from './infinitySlider/InfinitySlider';
import TimeCount from './TimeCount/TimeCount';
import { useTranslation } from 'react-i18next'; // Импорт хука перевода

const Discount = () => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className={scss.discount}>
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
          <img src={notebookSrc} alt="Notebook" />
        </div>
        
        {/* Используем перевод для заголовка */}
        <div className={scss.discount_block}>
          {t('discount_title')}
        </div>
        
        <div className={scss.discount_block}>
          <TimeCount />
        </div>   
        
        <div className={scss.discount_block}>
          {/* Используем перевод для кнопки */}
          <button>{t('choose_site')}</button>
          <img src={figureSrc} alt="Decorative figure" />
        </div>
        
        <img src={abstractLensesSrc} className={scss.abstractLenses} alt="Abstract lenses" />
        <img src={bloorCircleSrc} className={scss.bloorCircle} alt="Bloor circle" />
      </div>
    </div>
  );
}

export default Discount;
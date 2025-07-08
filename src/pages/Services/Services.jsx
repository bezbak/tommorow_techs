import React from 'react';
import scss from './Services.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/ServicesPage/Slider/Slider';
import Feedback from '../../components/ServicesPage/Feedback/Feedback';
import Cards from '../../components/ServicesPage/Cards/Cards';
import AboutContact from "../../components/AboutContact/AboutContact";

// Импорт изображений для слайдера
import portfolioImg from '/src/components/ServicesPage/img/portfolioImg_services-page.png';

// Импорт изображений для карточек
import imgIcon from '/src/components/ServicesPage/img/cards/img.svg';
import peopleIcon from '/src/components/ServicesPage/img/cards/people.svg';
import shopIcon from '/src/components/ServicesPage/img/cards/shop.svg';
import gearIcon from '/src/components/ServicesPage/img/cards/gear.svg';
import bookIcon from '/src/components/ServicesPage/img/cards/book.svg';
import verifyIcon from '/src/components/ServicesPage/img/cards/verify.svg';
import docMouseIcon from '/src/components/ServicesPage/img/cards/docMouse.svg';
import handIcon from '/src/components/ServicesPage/img/cards/hand.svg';
import boxIcon from '/src/components/ServicesPage/img/cards/box.svg';
import cutIcon from '/src/components/ServicesPage/img/cards/cut.svg';
import serverIcon from '/src/components/ServicesPage/img/cards/server.svg';
import progresIcon from '/src/components/ServicesPage/img/cards/progres.svg';
import fingerIcon from '/src/components/ServicesPage/img/cards/finger.svg';
import clapIcon from '/src/components/ServicesPage/img/cards/clap.svg';
import chromokeyIcon from '/src/components/ServicesPage/img/cards/chromokey.svg';
import printIcon from '/src/components/ServicesPage/img/cards/print.svg';

import tabletImg from '/src/components/ServicesPage/img/cards/tablet.png';
import laptopImg from '/src/components/ServicesPage/img/cards/laptop.png';
import mobileImg from '/src/components/ServicesPage/img/cards/mobile.png';
import magicImg from '/src/components/ServicesPage/img/cards/magic.svg';

import landscapeImg from '/src/components/ServicesPage/img/cards/Landscape-copy.png';
import brandingImg from '/src/components/ServicesPage/img/cards/branding.png';
import threeDImg from '/src/components/ServicesPage/img/cards/3D-copy.png';
import mobileDevImg from '/src/components/ServicesPage/img/cards/mobile-dev.png';
import botsImg from '/src/components/ServicesPage/img/cards/bots.png';
import dashboardImg from '/src/components/ServicesPage/img/cards/dashboard.png';
import photoImg from '/src/components/ServicesPage/img/cards/photo.png';

const Services = () => {
  const sliderContent = [
    {
      img: portfolioImg,
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош',
    },
    {
      img: portfolioImg,
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош',
    },
    {
      img: portfolioImg,
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош',
    },
    {
      img: portfolioImg,
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош',
    },
  ];
  
  const cardsContent = [
    {
      title: 'Разработка сайта',
      desc: 'Сайт улучшить вашу позицию на рынке и способствовать росту вашего бизнеса.',
      arguments: [
        { id: 1, img: imgIcon, title: 'Повышается видимость и доступность' },
        { id: 2, img: peopleIcon, title: 'Расширение клиентской базы' },
        { id: 3, img: shopIcon, title: 'Эффективный маркетинг и продажи' },
        { id: 4, img: gearIcon, title: 'Автоматизация бизнес-процессов' },
      ],
      formats: [
        { name: 'tablet', id: 1, img: tabletImg },
        { name: 'laptop', id: 3, img: laptopImg },
      ],
      img: landscapeImg,
    },
    {
      title: 'Брендинг',
      desc: 'Брендинг это ключевым элементом стратегии маркетинга и помогает бизнесам выделяться на рынке.',
      arguments: [
        { id: 1, img: bookIcon, title: 'Ценности и миссия' },
        { id: 2, img: verifyIcon, title: 'Имидж и репутация' },
        { id: 3, img: docMouseIcon, title: 'Контент и маркетинг' },
        { id: 4, img: handIcon, title: 'Лояльность и доверие' },
      ],
      formats: [
        { name: 'magic', id: 1, img: magicImg },
      ],
      img: brandingImg,
    },
    {
      title: '3D',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: boxIcon, title: 'Третье измерение' },
        { id: 2, img: cutIcon, title: 'Моделирование' },
        { id: 3, img: serverIcon, title: 'Визуализация' },
        { id: 4, img: progresIcon, title: 'Инновации в различных отраслях' },
      ],
      formats: [
        { name: 'tablet', id: 1, img: tabletImg },
        { name: 'mobile', id: 2, img: mobileImg },
        { name: 'laptop', id: 3, img: laptopImg },
      ],
      img: threeDImg,
    },
    {
      title: 'Приложение',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: fingerIcon, title: 'Быстрый доступ к продукту' },
        { id: 2, img: clapIcon, title: 'Интерактивность' },
        { id: 3, img: chromokeyIcon, title: 'Увеличение лояльности' },
        { id: 4, img: printIcon, title: 'Уведомления и взаимодействие' },
      ],
      formats: [
        { name: 'mobile', id: 2, img: mobileImg },
      ],
      img: mobileDevImg,
    },
    {
      title: 'Боты',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: boxIcon, title: 'Увеличение продаж' },
        { id: 2, img: fingerIcon, title: 'Эффективность и доступность' },
        { id: 3, img: serverIcon, title: 'Собирание данных' },
        { id: 4, img: gearIcon, title: 'Автоматизация задач' },
      ],
      formats: [
        { name: 'tablet', id: 1, img: tabletImg },
        { name: 'mobile', id: 2, img: mobileImg },
        { name: 'laptop', id: 3, img: laptopImg },
      ],
      img: botsImg,
    },
    {
      title: 'CRM',
      desc: 'это стратегия и технологический инструмент для управления взаимоотношениями с клиентами и оптимизации бизнес- процессов.',
      arguments: [
        { id: 1, img: boxIcon, title: 'Увеличение продаж' },
        { id: 2, img: fingerIcon, title: 'Эффективность и доступность' },
        { id: 3, img: serverIcon, title: 'Собирание данных' },
        { id: 4, img: gearIcon, title: 'Автоматизация задач' },
      ],
      formats: [
        { name: 'tablet', id: 1, img: tabletImg },
        { name: 'mobile', id: 2, img: mobileImg },
        { name: 'laptop', id: 3, img: laptopImg },
      ],
      img: dashboardImg,
    },
    {
      title: 'Target',
      desc: 'это стратегия и технологический инструмент для управления взаимоотношениями с клиентами и оптимизации бизнес- процессов.',
      arguments: [
        { id: 1, img: boxIcon, title: 'Увеличение продаж' },
        { id: 2, img: fingerIcon, title: 'Эффективность и доступность' },
        { id: 3, img: serverIcon, title: 'Собирание данных' },
        { id: 4, img: gearIcon, title: 'Автоматизация задач' },
      ],
      formats: [
        { name: 'tablet', id: 1, img: tabletImg },
        { name: 'mobile', id: 2, img: mobileImg },
        { name: 'laptop', id: 3, img: laptopImg },
      ],
      img: photoImg,
    },
  ];

  return (
    <>
      <div className={scss.Services}>
        <div className={scss.relative}>
          <Header />
          <div className={scss.Services_slider}>
            <section>
              <Slider children={sliderContent} />
            </section>
          </div>
          <section className={scss.Innovation}>
            <h2>Инновационные IT-решения для развития вашего бизнеса</h2>
            <a href='#services'>Выбрать услугу</a>
          </section>
          <section className={scss.Feedback}>
            <Feedback />
          </section>
          <section id='services' className={scss.DevelopmentServices}>
            <h1 className={scss.Servicesdev}>Услуги разработок</h1>
            <div className={scss.cards}>
              <Cards children={cardsContent} />
            </div>
          </section>
          <AboutContact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services;
import scss from './Services.module.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/ServicesPage/Slider/Slider';
import { Link } from 'react-router-dom';
import Feedback from '../../components/ServicesPage/Feedback/Feedback';
import Cards from '../../components/ServicesPage/Cards/Cards';

const Services = () => {
  const sliderContent = [
    {
      img: './src/components/ServicesPage/img/portfolioImg_services-page.png',
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош'
    },
    {
      img: './src/components/ServicesPage/img/portfolioImg_services-page.png',
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош'
    },
    {
      img: './src/components/ServicesPage/img/portfolioImg_services-page.png',
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош'
    },
    {
      img: './src/components/ServicesPage/img/portfolioImg_services-page.png',
      title: 'ОшТв (сайт)',
      desc: 'Редизайн популярного канала в городе Ош'
    },
    
  ]
  const cardsContent = [
    {
      title: 'Разработка сайта',
      desc: 'Сайт улучшить вашу позицию на рынке и способствовать росту вашего бизнеса.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/img.svg', title: 'Повышается видимость и доступность' },
        { id: 2, img: './src/components/ServicesPage/img/cards/people.svg', title: 'Расширение клиентской базы' },
        { id: 3, img: './src/components/ServicesPage/img/cards/shop.svg', title: 'Эффективный маркетинг и продажи' },
        { id: 4, img: './src/components/ServicesPage/img/cards/gear.svg', title: 'Автоматизация бизнес-процессов' }
      ],
      formats: [
        {
          name: 'tablet',
          id: 1,
          img: './src/components/ServicesPage/img/cards/tablet.png',
        },
        {
          name: 'laptop',
          id: 3,
          img: './src/components/ServicesPage/img/cards/laptop.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/Landscape-copy.png'
    },
    {
      title: 'Брендинг',
      desc: 'Брендинг это ключевым элементом стратегии маркетинга и помогает бизнесам выделяться на рынке.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/book.svg', title: 'Ценности и миссия' },
        { id: 2, img: './src/components/ServicesPage/img/cards/verify.svg', title: 'Имидж и репутация' },
        { id: 3, img: './src/components/ServicesPage/img/cards/docMouse.svg', title: 'Контент и маркетинг' },
        { id: 4, img: './src/components/ServicesPage/img/cards/hand.svg', title: 'Лояльность и доверие' }
      ],
      formats: [
        {
          name: 'magic',
          id: 1,
          img: './src/components/ServicesPage/img/cards/magic.svg',
        },
      ],
      img: './src/components/ServicesPage/img/cards/branding.png'
    },
    {
      title: '3D',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/box.svg', title: 'Третье измерение' },
        { id: 2, img: './src/components/ServicesPage/img/cards/cut.svg', title: 'Моделирование' },
        { id: 3, img: './src/components/ServicesPage/img/cards/server.svg', title: 'Визуализация' },
        { id: 4, img: './src/components/ServicesPage/img/cards/progres.svg', title: 'Инновации в различных отраслях' }
      ],
      formats: [
        {
          name: 'tablet',
          id: 1,
          img: './src/components/ServicesPage/img/cards/tablet.png',
        },
        {
          name: 'mobile',
          id: 2,
          img: './src/components/ServicesPage/img/cards/mobile.png',
        },
        {
          name: 'laptop',
          id: 3,
          img: './src/components/ServicesPage/img/cards/laptop.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/3D-copy.png'
    },
    {
      title: 'Приложение',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/finger.svg', title: 'Быстрый доступ к продукту' },
        { id: 2, img: './src/components/ServicesPage/img/cards/clap.svg', title: 'Интерактивность' },
        { id: 3, img: './src/components/ServicesPage/img/cards/chromokey.svg', title: 'Увеличение лояльности' },
        { id: 4, img: './src/components/ServicesPage/img/cards/print.svg', title: 'Уведомления и взаимодействие' }
      ],
      formats: [
        {
          name: 'mobile',
          id: 2,
          img: './src/components/ServicesPage/img/cards/mobile.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/mobile-dev.png'
    },
    {
      title: 'Боты',
      desc: 'Технология и процесс создания изображений, объектов и сцен в трех измерениях, что позволяет воссоздать глубину и объем.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/box.svg', title: 'Увеличение продаж' },
        { id: 2, img: './src/components/ServicesPage/img/cards/finger.svg', title: 'Эффективность и доступность' },
        { id: 3, img: './src/components/ServicesPage/img/cards/server.svg', title: 'Собирание данных' },
        { id: 4, img: './src/components/ServicesPage/img/cards/gear.svg', title: 'Автоматизация задач' }
      ],
      formats: [
        {
          name: 'tablet',
          id: 1,
          img: './src/components/ServicesPage/img/cards/tablet.png',
        },
        {
          name: 'mobile',
          id: 2,
          img: './src/components/ServicesPage/img/cards/mobile.png',
        },
        {
          name: 'laptop',
          id: 3,
          img: './src/components/ServicesPage/img/cards/laptop.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/bots.png'
    },
    {
      title: 'CRM',
      desc: 'это стратегия и технологический инструмент для управления взаимоотношениями с клиентами и оптимизации бизнес- процессов.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/box.svg', title: 'Увеличение продаж' },
        { id: 2, img: './src/components/ServicesPage/img/cards/finger.svg', title: 'Эффективность и доступность' },
        { id: 3, img: './src/components/ServicesPage/img/cards/server.svg', title: 'Собирание данных' },
        { id: 4, img: './src/components/ServicesPage/img/cards/gear.svg', title: 'Автоматизация задач' }
      ],
      formats: [
        {
          name: 'tablet',
          id: 1,
          img: './src/components/ServicesPage/img/cards/tablet.png',
        },
        {
          name: 'mobile',
          id: 2,
          img: './src/components/ServicesPage/img/cards/mobile.png',
        },
        {
          name: 'laptop',
          id: 3,
          img: './src/components/ServicesPage/img/cards/laptop.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/dashboard.png'
    },
    {
      title: 'Target',
      desc: 'это стратегия и технологический инструмент для управления взаимоотношениями с клиентами и оптимизации бизнес- процессов.',
      arguments: [
        { id: 1, img: './src/components/ServicesPage/img/cards/box.svg', title: 'Увеличение продаж' },
        { id: 2, img: './src/components/ServicesPage/img/cards/finger.svg', title: 'Эффективность и доступность' },
        { id: 3, img: './src/components/ServicesPage/img/cards/server.svg', title: 'Собирание данных' },
        { id: 4, img: './src/components/ServicesPage/img/cards/gear.svg', title: 'Автоматизация задач' }
      ],
      formats: [
        {
          name: 'tablet',
          id: 1,
          img: './src/components/ServicesPage/img/cards/tablet.png',
        },
        {
          name: 'mobile',
          id: 2,
          img: './src/components/ServicesPage/img/cards/mobile.png',
        },
        {
          name: 'laptop',
          id: 3,
          img: './src/components/ServicesPage/img/cards/laptop.png',
        }
      ],
      img: './src/components/ServicesPage/img/cards/photo.png'
    }
  ]
  return (
    <>
    <div className={` ${scss.Services}`}>
      <div className={scss.relative}>
        <Header />
        <div className={scss.Services_slider}>
          <section>
            <Slider children={sliderContent} />
          </section>
        </div>
        <section className={scss.Innovation}>
          <h2>
            Инновационные IT-решения
            для развития вашего бизнеса
          </h2>
          <a href="#services">Выбрать услугу</a>
        </section>
        <section className={scss.Feedback}>
          <Feedback />
        </section>
        <div className={scss.Line}>
          <img src="./src/components/ServicesPage/img/Line.png" alt="" />
        </div>
        <section id='services' className={scss.DevelopmentServices}>
          <h1 className={scss.Servicesdev}>Услуги разработок</h1>
          <div className={scss.cards}>
            <Cards children={cardsContent} />
          </div>
        </section>
        <div className={scss.Line2}>
          <img src="./src/components/ServicesPage/img/Line.png" alt="" />
        </div>
        <section className={scss.InTouch}>
          <h2>
            Мы всегда остаемся на связи
            для обсуждения ваших проектов
          </h2>
          <div>
            <Link> <img src="./src/components/ServicesPage/img/compass.svg" alt="" />Связаться с нами</Link>
            <Link> <img src="./src/components/ServicesPage/img/home.svg" alt="" />Вернуться домой</Link>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Services;

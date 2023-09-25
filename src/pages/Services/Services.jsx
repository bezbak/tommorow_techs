import scss from './Services.module.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/ServicesPage/Slider/Slider';

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
  return (
    <div className={scss.Services}>
      <Header />
      <section className={`size-1200 ${scss.Services__slider}`}>
        <Slider children={sliderContent} />
      </section>
      {/*<Footer />*/}
    </div>
  );
}

export default Services;

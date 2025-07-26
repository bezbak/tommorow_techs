import Header from '../../components/Header/Header'
import lol from './AboutUs.module.scss'
import AboutBanner from '../../components/AboutBanner/AboutBanner'
import AboutPostBanner from '../../components/AboutPostBanner/AboutPostBanner'
import AboutNowWe from '../../components/AboutNowWe/AboutNowWe'
import AboutThisUs from '../../components/AboutThisUs/AboutThisUs'
import AboutMission from '../../components/AboutMission/AboutMission'
import AboutValues from '../../components/AboutValues/AboutValues'
import AboutGalery from '../../components/AboutGalery/AboutGalery'
import AboutContact from '../../components/AboutContact/AboutContact'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>О нас — Проекты и отзывы клиентов | Tomorrow-Techs</title>
        <meta name="description" content="Посмотрите успешные кейсы и отзывы клиентов Tomorrow-Techs. Более 100 реализованных проектов по разработке сайтов, CRM и продвижению." />
        <meta property="og:title" content="О нас — IT-студия Tomorrow-Techs" />
        <meta property="og:description" content="Проекты, кейсы и реальные отзывы клиентов Tomorrow-Techs. Доверие, опыт и качество — основа нашей работы." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tomorrow-techs.com/about" />
      </Helmet>
      <div className={lol.AboutUs}>
        <Header />
        <AboutBanner />
        <AboutPostBanner />
        <AboutNowWe />
        <AboutThisUs />
        <AboutMission />
        <AboutValues />
        <AboutGalery />
        <AboutContact />
        <Footer />
      </div>
    </>
  )
}

export default AboutUs

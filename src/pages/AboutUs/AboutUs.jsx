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

const AboutUs = () => {
  return (
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
  )
}

export default AboutUs

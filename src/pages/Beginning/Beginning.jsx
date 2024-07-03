import { Banner } from '../../components'
import scss from './Beginning.module.scss'
import mapSrc from './map.svg'
import Advantages from '../../components/Advantages/Advantages'
import Progres from '../../components/Progress/Progress'
import Innovations from '../../components/Innovations/Innovations'
import AdaptiveBlock from '../../components/AdaptiveBlock/AdaptiveBlock'
import Footer from '../../components/Footer/Footer'
import Portfolio2 from '../../components/Portfolio/Portfolio2'

const Beginning = () => {
  return (
    <div className={scss.beginning}>
      <div className={scss.relative}>
        <Banner />
        <button className={scss.freeConsultation}>
          <img src={mapSrc} alt='' />
          <div>Бесплатная консультация</div>
        </button>
        <Innovations />
        <div className={scss.line} />
        <Progres />
        <div className={scss.line} />
        <Portfolio2 />
        <div className={scss.line} />
        <AdaptiveBlock />
        <div className={scss.line} />
        <Advantages />
      </div>
      <Footer />
    </div>
  )
}

export default Beginning

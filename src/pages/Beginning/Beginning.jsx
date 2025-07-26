import { Banner } from '../../components'
import scss from './Beginning.module.scss'
import Advantages from '../../components/Advantages/Advantages'
import Progres from '../../components/Progress/Progress'
import Innovations from '../../components/Innovations/Innovations'
import AdaptiveBlock from '../../components/AdaptiveBlock/AdaptiveBlock'
import Footer from '../../components/Footer/Footer'
import Portfolio2 from '../../components/Portfolio/Portfolio2'

const Beginning = ({isLoading}) => {
  return (
    <div className={scss.beginning}>
      <div className={scss.relative}>
        <Banner isLoading={isLoading} />
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

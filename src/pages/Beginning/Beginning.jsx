import React ,{useEffect,useState}from 'react'
import { Banner } from '../../components'
import scss from './Beginning.module.scss'
import mapSrc from './map.svg'
import Advantages from '../../components/Advantages/Advantages'
import Progres from '../../components/Progress/Progress'
import Innovations from '../../components/Innovations/Innovations'
import AdaptiveBlock from '../../components/AdaptiveBlock/AdaptiveBlock'
import Footer from '../../components/Footer/Footer'

const Beginning = () => {
  const [scrollPosition, setScrollPosition] = useState(1);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  return (
    <div className={scss.beginning}>
      <div className={scss.relative} style={{transform:`translateY(-${scrollPosition>4420?(scrollPosition-4420):0}px`}}>
        <Banner />
        <div className={scss.freeConsultation}>
          <img src={mapSrc} alt="" />
          <button>Бесплатная консультация</button>
        </div>
        <Innovations />
        <Progres />
        <AdaptiveBlock />
        <Advantages />
     
      </div>
      <div style={{height:5600,display:'flex',alignItems:'end',position:'relative',justifyContent:'center'}}>
        <Footer />
      </div>
    </div>
  )
}

export default Beginning
    
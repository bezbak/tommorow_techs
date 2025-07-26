import { Banner } from '../../components'
import scss from './Beginning.module.scss'
import Advantages from '../../components/Advantages/Advantages'
import Progres from '../../components/Progress/Progress'
import Innovations from '../../components/Innovations/Innovations'
import AdaptiveBlock from '../../components/AdaptiveBlock/AdaptiveBlock'
import Footer from '../../components/Footer/Footer'
import Portfolio2 from '../../components/Portfolio/Portfolio2'
import { Helmet } from 'react-helmet'

const Beginning = ({ isLoading }) => {
  return (
    <>
      <Helmet>
        <title>Заказать сайт, CRM, IT-услуги в Кыргызстане — Tomorrow-Techs</title>
        <meta name="description" content="Tomorrow-Techs — создаем сайты, CRM, боты, мобильные приложения и обеспечиваем SMM-продвижение в Кыргызстане. Закажите IT-услуги под ключ прямо сейчас!" />
        <meta property="og:title" content="Заказать сайт, CRM, IT-услуги — Tomorrow-Techs" />
        <meta property="og:description" content="Надежная IT-студия из Кыргызстана. Разрабатываем сайты, CRM, мобильные приложения и продвигаем в соцсетях." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tomorrow-techs.com/" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tomorrow-Techs",
            "url": "https://tomorrow-techs.com",
            "logo": "https://tomorrow-techs.com/logo.svg",
            "sameAs": [
              "https://www.instagram.com/tomorrow_techs",
              "https://t.me/tomorrow_techs"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+996-555-000-000",
              "contactType": "Customer Support",
              "areaServed": "KG",
              "availableLanguage": ["Russian", "Kyrgyz"]
            }
          }
          `}
        </script>
      </Helmet>
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
    </>
  )
}

export default Beginning

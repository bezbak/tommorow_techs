import MainRouter from "./routes/MainRouter"
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './i18n';
import Preloader from "./components/Preloader/Preloader";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import mapSrc from './pages/Beginning/map.svg'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2 // how long (in seconds) it takes to "catch up" to the native scroll position
    });
  }, []);
  return (
    <>
      {isLoading && <Preloader setIsLoading={setIsLoading} />}
      <div id="smooth-wrapper" className="App">
        <ScrollToTop />

        <div id="smooth-content">
          <MainRouter isLoading={isLoading} />
        </div>
        <ScrollToTopButton />
        <button className="freeConsultation">
          <img src={mapSrc} alt='' />
          <div>Бесплатная консультация</div>
        </button>
      </div>
    </>
  )
}

export default App

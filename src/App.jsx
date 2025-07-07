import MainRouter from "./routes/MainRouter"
import { useRef, useLayoutEffect, useState } from "react";
// import { gsap } from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import './i18n';
import Preloader from "./components/Preloader/Preloader";

// gsap.registerPlugin(ScrollSmoother);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2 // how long (in seconds) it takes to "catch up" to the native scroll position
    });
  }, []);
  return (
    <>
      {isLoading && <Preloader />}
      {/* <div id="smooth-wrapper" className="App">
        <div id="smooth-content"> */}
          <MainRouter />
        {/* </div>
      </div> */}
    </>
  )
}

export default App

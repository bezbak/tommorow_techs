
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll"
import MainRouter from "./routes/MainRouter"
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 2 // how long (in seconds) it takes to "catch up" to the native scroll position
    });
  }, []);
  return (
    // <SmoothScroll>
    <div id="smooth-wrapper" className="App">
      <div id="smooth-content">
        <MainRouter />
      </div>
    </div>
    // </SmoothScroll>
  )
}

export default App

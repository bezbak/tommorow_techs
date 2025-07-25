import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // GSAP scrollTo работает только с плагином ScrollToPlugin,
    // но если ты используешь ScrollSmoother, делаем так:
    const smoother = window.ScrollSmoother?.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

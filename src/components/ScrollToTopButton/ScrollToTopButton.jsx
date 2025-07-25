import React, { useState, useEffect, useRef } from 'react';
import styles from './ScrollToTop.module.scss';
import svg from './Stand up.svg';
import { gsap } from 'gsap';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        autoAlpha: visible ? 1 : 0,
        y: visible ? 0 : 20,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: visible ? "auto" : "none",
      });
    }
  }, [visible]);

  const scrollToTop = () => {
    const smoother = window.ScrollSmoother?.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      ref={btnRef}
      className={styles.scrollToTopButton}
    >
      <img src={svg} alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTopButton;

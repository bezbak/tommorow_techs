import React, { useRef, useEffect } from 'react';
import styles from './dashboardRight.module.scss';

import centerLogo from './img/logo.svg';
import image from './img/image.svg'
import bg from './img/bg.svg'
import react from './img/react.svg'
import node from './img/node.svg'
import git from './img/git.svg'
import redux from './img/redux.svg'
import xd from './img/xd.svg'
import diamond from './img/diamond.svg'
import figma from './img/figma.svg'
import ps from './img/ps.svg'
import ai from './img/ai.svg'

const PlanetOrbit = () => {
  const containerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && mainRef.current) {
        const scale = getComputedStyle(mainRef.current).transform;
        const rect = mainRef.current.getBoundingClientRect();
        const match = scale.match(/matrix\(([\d.]+)/);
        const scaleFactor = match ? parseFloat(match[1]) : 1;
        // containerRef.current.style.width = `${rect.width * scaleFactor}px`;
        // containerRef.current.style.height = `${rect.height * scaleFactor}px`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.orbitContainer} ref={containerRef}>
      <img src={centerLogo} alt="Center Logo" className={styles.centerLogo} ref={mainRef} />

      {/* Иконки – стоят на месте */}
      <div className={`${styles.orbitCont} ${styles.orbitCont1}`}>
        <img src={image} className={`${styles.icon} ${styles.iconTop}`} alt="Gay1" />
        <img src={bg} className={`${styles.icon} ${styles.iconTopLeft}`} alt="bg" />
        <img src={bg} className={`${styles.icon} ${styles.iconTopBottom}`} alt="bg2" />
        <div className={styles.orbit1}>
          <div className={styles.satellite}></div>
          <div className={`${styles.satellite} ${styles.reverse}`}></div>
        </div>
      </div>
      <div className={`${styles.orbitCont} ${styles.orbitCont2}`}>
        <img src={react} className={`${styles.icon} ${styles.iconTopLeft2}`} alt="React" />
        <img src={node} className={`${styles.icon} ${styles.iconTopRight2}`} alt="node" />
        <img src={git} className={`${styles.icon} ${styles.iconBotLeft2}`} alt="git" />
        <img src={redux} className={`${styles.icon} ${styles.iconBotRight2}`} alt="redux" />
        <div className={styles.orbit2}>
          <div className={styles.satellite}></div>
          <div className={`${styles.satellite} ${styles.reverse}`}></div>
        </div>
      </div>
      <div className={`${styles.orbitCont} ${styles.orbitCont3}`}>
        <img src={xd} className={`${styles.icon} ${styles.iconTopRight3}`} alt="xd" />
        <img src={figma} className={`${styles.icon} ${styles.iconTopLeft3}`} alt="figma" />
        <img src={ai} className={`${styles.icon} ${styles.iconBotLeft3}`} alt="ai" />
        <img src={ps} className={`${styles.icon} ${styles.iconBotRight3}`} alt="ps" />
        <img src={diamond} className={`${styles.icon} ${styles.iconBot3}`} alt="diamond" />
        <div className={styles.orbit3}>
          <div className={styles.satellite}></div>
          <div className={`${styles.satellite} ${styles.reverse}`}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetOrbit;

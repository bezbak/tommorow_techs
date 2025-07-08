import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss'; // Импортируем SCSS модуль
import svg from './Stand up.svg'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight * 1.1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : styles.hidden}`}
        >
            <img 
                src={svg}
                alt='Scroll to top' 
            />
        </button>
    );
};

export default ScrollToTopButton;
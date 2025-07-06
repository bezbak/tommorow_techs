// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function useLenisScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//       smoothTouch: false,
//       direction: 'vertical',
//       gestureOrientation: 'vertical',
//     });

//     // Обновление ScrollTrigger при скролле Lenis
//     lenis.on('scroll', ScrollTrigger.update);

//     // Используем gsap.ticker вместо requestAnimationFrame для точного синка
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     // Убираем сглаживание в gsap, чтобы не было "дребезга"
//     gsap.ticker.lagSmoothing(0);

//     // Обновление ScrollTrigger при резайзе
//     ScrollTrigger.addEventListener('refreshInit', () => lenis.resize());

//     return () => {
//       gsap.ticker.remove((time) => lenis.raf(time * 1000));
//       lenis.off('scroll', ScrollTrigger.update);
//     };
//   }, []);
// }

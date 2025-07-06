import { useState } from 'react';
import lol from './AboutGalery.module.scss';
import galleryData from './galleryData.json';
import AnimatedLine from '../AnimatedLine/AnimatedLine';

const AboutGalery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ImageClick = (event) => {
    const imageWidth = event.target.clientWidth;
    const clickPosition = event.nativeEvent.offsetX;

    if (clickPosition > imageWidth / 2) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.images.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? galleryData.images.length - 1 : prevIndex - 1
      );
    }
  };

  const currentImage = galleryData.images[currentIndex].src;
  const description = galleryData.images[currentIndex].description;

  return (
    <div className={lol.AboutGalery}>
      <h2>Галерея</h2>
      <div className={lol.center}>
        <div className={lol.slide}>
          <img
            src={currentImage}
            className={lol.onePage}
            alt=''
            onClick={ImageClick}
          />
          <h2 className={lol.description}>{description}</h2>
        </div>
        <div className={lol.images}>
          {galleryData.images.map((image, index) => (
            <img
              key={index}
              className={lol.png}
              src={image.src}
              alt=''
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <center>
          <AnimatedLine />
        </center>
      </div>
    </div>
  );
};

export default AboutGalery;

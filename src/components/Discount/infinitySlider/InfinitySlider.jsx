import React from "react";
import "./infinitySlider.scss";
// import { cardDetails } from "./carousel-config";
import CarouselItem from "./CaruselItem.jsx";

export default function AutoplayCarousel() {
 const   cardDetails = [
        'Скидки',
        'Скидки',
        'Скидки',
        'Скидки',
        'Скидки',
        'Скидки',
        'Скидки',
        'Скидки',

    ]
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cardDetails.map((detailKey,index) => {
          return (
            <CarouselItem key={index}
              text={detailKey}
            ></CarouselItem>
          );
        })}
        {cardDetails.map((detailKey,index) => {
          return (
            <CarouselItem
            key={index}
              text={detailKey}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
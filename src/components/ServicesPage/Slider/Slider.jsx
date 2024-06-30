import React from 'react'
import scss from './Slider.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import './style.css'

const Slider = ({ children }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }

  return (
    <div className={scss.Slider}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          pagination
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {children.map((el, idx) => (
          <SwiperSlide key={idx}>
            <div className={scss.Slider__slide}>
              <img className={scss.SliderImg} src={el.img} alt='' />
              <div>
                <p>{el.title}</p>
                <p>{el.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider

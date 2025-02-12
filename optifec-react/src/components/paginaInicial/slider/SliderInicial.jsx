import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
export default function SliderInicial() {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <img src="/public/images/gestao.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/images/projetos.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/images/integracao.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

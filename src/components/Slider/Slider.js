import React from "react";
import "./Slider.css";
import slide from "../../images/dance 1.svg";

import {Swiper, SwiperSlider} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'


function Slider() {
  return (
    <section id="slider">
      <div className="container">
        <h2 className="all__Headers">Albums of the week</h2>

        <img src={slide} alt="loading" />
      </div>
    </section>
  );
}

export default Slider;

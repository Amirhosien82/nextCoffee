"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "./Slider.module.css";
// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <picture>
            <source
              srcSet="/./images/slider1-min.jpeg"
              media="(max-width:650px)"
            />
            <Image src="/./images/slider1.jpg" fill alt="slider1" />
          </picture>
          <div className={styled.caption}>
            <p>لذت نوشیدن قهوه</p>
            <h3>با نکست کافه</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet="/./images/slider2-min.jpg"
              media="(max-width:650px)"
            />
            <Image src="/./images/slider2.jpg" fill alt="slider2" />
          </picture>
          <div className={styled.caption}>
            <p>خرید با کیفیت ترین محصولات</p>
            <h3>فروشگاه نکست</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet="/./images/slider3-min.jpg"
              media="(max-width:650px)"
            />
            <Image src="/./images/slider3.jpg" fill alt="slider3" />
          </picture>
          <div className={styled.caption}>
            <p>محیطی آرام و دلنشین</p>
            <h3>در نکست کافه</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

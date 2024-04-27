'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swipper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import b1 from '@/public/b1.webp'
import b3 from '@/public/b3.webp'
import img8 from '@/public/img8.webp'
import img9 from '@/public/img9.webp'
import ScrollDownIndicator from './scrollDownIndicator';

export default function ImageCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={b1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={b3} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={img8} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={img9} alt='' />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

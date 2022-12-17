import React from "react";
import "./SliderComponent.scss";

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function(props){

    return(
        <div className="slider_wrapper">
            <Swiper
                autoPlay={{
                     delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
            >
                {
                    props.slides.length > 0 ?
                        props.slides.map((item, index)=>{
                            return (
                             <SwiperSlide key={index}>
                                 <div className="slide_wrap">
                                     <img  src={item.file} alt=""/>
                                     <p>{item.title}</p>
                                 </div>
                             </SwiperSlide>
                            )
                        })
                         :
                        ''
                }
            </Swiper>
        </div>
    )
}



import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import EquipeCard from "./EquipeCard.jsx";

const EquipeCarousel = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        setWidth(window.innerWidth)
        console.log(width);
    }, [window.innerWidth])

    return (
        <div className={'container mx-auto pb-36'}>
            <div className="text-center py-5 mt-3">
                <h1 className="uppercase text-3xl text-white pb-8">Nosso <span className="underline decoration-yellow-900">timeㅤ</span></h1>
                <p className="text-white pb-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea eum harum
                    ipsa iste sit suscipit.</p>
            </div>
            <Swiper
                slidesPerView={ width < 430 ? 1 : width < 1025 ? 3 : 4}
                centeredSlides={true}
                spaceBetween={15}
                slidesPerGroup={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                className="mySwiper h-5px"
            >
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>
                <SwiperSlide className={''}>
                    <EquipeCard/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default EquipeCarousel;
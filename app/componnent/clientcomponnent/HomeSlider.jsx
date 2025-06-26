'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import image2 from '../../../public/assets/homeappliece-1.jpg';
import image1 from '../../../public/assets/homeappliece-5.jpg';
import SingleSlide from './SingleSlide';



const HomeSlider = () => {


    const imagearray = [image1, image2, image2,];

    return (
        <section className='sm:pt-[72px] md:pt-[77px] lg:pt-[80px]'>
            <div className=''>
                <div className=''>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >



                        {
                            imagearray.map((items, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        <SingleSlide image={items} index={index} />
                                    </SwiperSlide>

                                )
                            })
                        }


                    </Swiper>
                </div>
            </div>
        </section >
    );


}



export default HomeSlider;

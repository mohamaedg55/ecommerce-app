// "use client"
import GetAllCategories from '@/api/GetAllCategories';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import CategoriesSwiper from '../CategoriesSwiper/CategoriesSwiper';


export default async function CategorySlider() {
    const { data } = await GetAllCategories();

    return <>

        <CategoriesSwiper data={data} />


    </>
}

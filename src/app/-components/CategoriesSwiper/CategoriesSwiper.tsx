"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import { Category } from './../../../types/Category.type';
import Image from 'next/image';
import { ProductType } from './../../../types/product.types';



// export default function CategoriesSwiper({ data }: { data: ProductType }) {
export default function CategoriesSwiper({ data }: { data: Category[] }) {

    return <>
        <div className="w-[80%] mx-auto">
            <h1 className='my-4 flex items-center justify-center text-blue-500 text-lg font-bold'>Shop Popular Category Slider</h1>
            <Swiper
                spaceBetween={0}
                slidesPerView={7}
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
            >
                {data.map((category: Category) =>
                    <SwiperSlide key={category._id}>
                        <Image
                            alt={"test"}
                            src={category.image}
                            width={100} height={100}
                            className="w-full object-cover  h-[150px]"
                        />
                        <p className='absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black/40'>
                            {category.name}
                        </p>
                    </SwiperSlide>
                )}
            </Swiper >
        </div>




    </>
}

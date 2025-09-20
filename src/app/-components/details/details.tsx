import React from 'react'
import { Button } from '@/components/ui/button';
import { ProductType } from './../../../types/product.types';
import AddBtn from '../AddBtn/AddBtn';


export default function Details({ data }: { data: ProductType }) {
    return <>
        <div className="container w-[80%] mx-auto p-4 flex">
            <div className="w-1/4">
                <div className="p-4">
                    <img src={data.imageCover} className="w-full" alt="" />
                </div>
            </div>
            <div className="w-3/4">
                <div className="p-4">
                    <h1 className="text-2xl font-bold my-4">{data.title}</h1>
                    <p>{data.description}</p>
                    <p className="text-emerald-500 my-2">{data.category.name}</p>
                    <div className="flex justify-between w-full my-4">
                        <span className=" font-bold"> {data.price} EGP</span>
                        <span>
                            {data.ratingsAverage}{" "}
                            <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                        </span>
                    </div>
                    <AddBtn id={data.id} />
                    {/* <Button className="my-4 w-full cursor-pointer">Add To cart</Button> */}
                </div>
            </div>
        </div>



    </>
}

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductType } from './../../../types/product.types';

import AddBtn from "../AddBtn/AddBtn";


export default function Singleproduct({ product }: { product: ProductType }) {
    return <>
        <div className="w-full md:w-1/2 lg:w-1/4 p-3" key={product.id}>
            <div className="prod p-4">
                <Card className=" gap-2 p-2">
                    <Link href={`/products/${product._id}`}>
                        <CardHeader>
                            <CardTitle>
                                <Image src={product.imageCover} alt="Picture of the author"
                                    width={500}
                                    height={500} />
                            </CardTitle>
                            <CardDescription className="text-emerald-600">
                                {product.category.name}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="font-bold">
                            <p className="line-clamp-2">{product.title}</p>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between w-full">
                                <span> {product.price} EGP</span>
                                <span>
                                    {product.ratingsAverage}{" "}
                                    <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                                </span>
                            </div>
                        </CardFooter>
                    </Link>
                    <AddBtn id={product.id} />
                </Card>

            </div>
        </div >

    </>
}

"use client"
import AddToCart from '@/cartActions/addTocart.action'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner';


export default function AddBtn({ id }: { id: string }) {


    async function checkaddproduct(id: string) {
        const res = await AddToCart(id);
        console.log(res);
        if (res.status === "Success") {
            toast.success("Product added to cart successfully ✅", {
                position: "top-center",
                duration: 2000,

            });
        }
        else {
            toast.success("Failed to add product ❌", {
                position: "top-center",
                duration: 2000,

            });
        }
    }

    return <>
        <Button onClick={() => checkaddproduct(id)} className="cursor-pointer w-full">Add To Cart</Button>

    </>
}

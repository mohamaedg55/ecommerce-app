"use server"

import getMyToken from "@/utilities/getMytoken";


export default async function AddToCart(id: string) {
    const token = await getMyToken()
    if (!token) {
        throw new Error("No valid session found. Please log in first.")
    }


    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        method: "POST",
        headers: {
            token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id, }),
    });
    const Payload = await res.json();
    return Payload

}
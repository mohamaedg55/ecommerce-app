"use server"

import getMyToken from "@/utilities/getMytoken"

export default async function UpdateCartQuantity(id: string, count: string) {
    const token = await getMyToken()
    if (!token) throw new Error("login First")

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method: "PUT",
        headers: {
            token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
    });

    const payload = await res.json();
    return payload;


}
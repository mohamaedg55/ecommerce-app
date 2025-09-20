"use server";

import getMyToken from "@/utilities/getMytoken";



export default async function ClearCart() {

    const token = await getMyToken();
    if (!token) throw new Error("login First")

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: "DELETE",
        headers: { token },
    });
    const payload = await res.json();
    return payload;
}
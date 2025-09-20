"use server";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";


export default async function getMyToken() {
    const decodetoken = (await cookies()).get("next-auth.session-token")?.value;

    const token = await decode({ token: decodetoken, secret: process.env.NEXTAUTH_SECRET! });


    return token?.token
}


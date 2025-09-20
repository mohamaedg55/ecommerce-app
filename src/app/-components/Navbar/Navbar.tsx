"use client"
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/freshcart-logo.svg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react"
import Login from './../../Login/page';


export default function Navbar() {
    const { data: session, status } = useSession();
    console.log(session);
    function logout() {
        signOut({ callbackUrl: "/Login" })
    }
    return (
        <>
            <nav className="bg-blue-500 text-white  ">
                <div className="container w-[80%] mx-auto p-4 flex justify-between items-center">
                    <div className="left ">
                        <ul className="flex gap-4 items-center">
                            <>

                            </>
                            <li>
                                <Link href="/">
                                    {" "}
                                    <Image src={logo} alt="Freshcart Logo" />
                                </Link>
                            </li>
                            <li>
                                {" "}
                                <Link href="/">Home</Link>
                            </li>
                            {session && (<li>
                                {" "}
                                <Link href="/cart">Cart</Link>
                            </li>)}
                            <li>
                                <Link href="/brands">Brands</Link>{" "}
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/categories">Categories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right  text-white  ">
                        <ul className="flex gap-3 items-center">
                            <div className="flex justify-between gap-3">
                                {!session ? <>
                                    <div className="flex gap-3 items-center">
                                        <i className="fa-brands fa-facebook"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-x-twitter"></i>
                                        <i className="fa-brands fa-linkedin"></i>
                                        <i className="fa-brands fa-youtube"></i>
                                        <i className="fa-brands fa-tiktok"></i>
                                    </div>
                                    <li>
                                        <Link href="/Register">Register</Link>
                                    </li>
                                    <li>
                                        <Link href="/Login">Login</Link>
                                    </li>


                                </> : <>
                                    <li>
                                        <span className="cursor-pointer" onClick={logout}>Signout</span>
                                    </li>
                                    {session && <li> Hi {session?.user.name} </li>}
                                </>}

                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

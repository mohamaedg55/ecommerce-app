"use client"

import React, { useEffect, useState } from 'react'
import getloggedUsercart from '@/cartActions/getUsercart.action';
import removeItemFromCart from '@/cartActions/RemovecartItem.action';
import { toast } from 'sonner';
import UpdateCartQuantity from '@/cartActions/UpdateCartQuantity.action';
import { Button } from '@/components/ui/button';
import ClearCart from '@/cartActions/ClearCartItem';



export default function Cart() {

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [removeDisabled, setremoveDisabled] = useState(false);
    const [updateDisabled, setupdateDisabled] = useState(false);
    const [updateLoading, setupdateLoading] = useState(false);
    const [currentID, setcurrentID] = useState("");


    async function getusercart() {
        try {
            const res = await getloggedUsercart()
            console.log(res);

            if (res.status === "success") {
                setProducts(res.data.products)
                setisLoading(false)
            }
        }

        catch (err) {
            console.log(err);
            setisLoading(false)

        }
    }
    async function deleteproduct(id: string) {
        setremoveDisabled(true)
        const res = await removeItemFromCart(id)
        if (res.status === "success") {
            setProducts(res.data.products)
            toast.success("Product removed from cart successfully 🗑️", {
                position: "top-center",
                duration: 2000
            });
            setremoveDisabled(false)
        } else {
            toast.error("The product has been removed from your cart.🗑️🗑️", {
                position: "top-center",
                duration: 2000
            });
            setremoveDisabled(false)
        }
    }

    async function UpdateCart(id: string, count: string) {
        setcurrentID(id)
        setupdateLoading(true)
        setupdateDisabled(true)
        const res = await UpdateCartQuantity(id, count)
        console.log(res);
        if (res.status === "success") {
            setProducts(res.data.products)
            toast.success("Cart updated successfully 👌", {
                position: "top-center",
                duration: 2000
            });
            setupdateLoading(false)
            setupdateDisabled(false)
        }
        else {
            toast.error("Failed to update cart ", {
                position: "top-center",
                duration: 2000
            });
            setupdateDisabled(false);
            setupdateLoading(false)
        }


    }

    async function cler() {
        const res = await ClearCart()
        if (res.messag === "success") {
            // getusercart()
            setProducts([])
        }

    }

    useEffect(() => {
        getusercart()
    }, []);

    if (isLoading) {
        return <h1 className='text-center text-3xl font-bold my-12 text-red-600'>
            loading  </h1>
    }


    return <>


        {products?.length > 0 ? <div className="w-2/3 mx-auto my-12">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-end">
                    <Button onClick={() => cler()} className='cursor-pointer my-4 bg-red-600 hover:bg-red-800'>Clear Cart Item</Button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) =>
                            <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4">
                                    <img src={product.product.imageCover}
                                        className="w-16 md:w-32 max-w-full max-h-full"
                                        alt={product.product.title} />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product.product.title}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button
                                            disabled={updateDisabled}
                                            onClick={() => UpdateCart(product.product.id, product.count - 1)}
                                            className="disabled:bg-slate-300 inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            {product.product.id === currentID ? updateLoading ? <i className='fas fa-spinner fa-spin'></i> : <span> {product.count} </span> : <span> {product.count} </span>}

                                        </div>
                                        <button
                                            disabled={updateDisabled}
                                            onClick={() => UpdateCart(product.product.id, product.count + 1)}
                                            className="disabled:bg-slate-300 inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 " type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {product.price} EGP
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        disabled={removeDisabled}
                                        onClick={() => deleteproduct(product.product.id)}
                                        className='text-red-500 font-bold cursor-pointer disabled:bg-slate-900 disabled:p-2 disabled:rounded-2xl disabled:text-white'>
                                        Remove</button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div > :
            <h1 className='text-center text-3xl font-bold my-12 text-red-600'>
                NO products found 😢 </h1>
        }
    </>
}




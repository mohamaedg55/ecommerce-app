import React from 'react'
import Singleproduct from '../singleproduct/singleproduct';
import getproducts from '@/api/products.api';
import { ProductType } from './../../../types/product.types';

export default async function Allproduct() {
    const data = await getproducts();
    return <>
        <div className="container w-[80%] mx-auto my-12">
            <div className="flex flex-wrap">
                {data.map((currentproduct: ProductType) => (
                    <Singleproduct key={currentproduct.id} product={currentproduct} />
                ))}
            </div>
        </div>



    </>
}

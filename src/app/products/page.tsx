import React from 'react'

import Singleproduct from '../-components/singleproduct/singleproduct'
import getproducts from '@/api/products.api'
import Allproduct from '../-components/Allproduct/Allproduct'

export default async function products() {
    return <>
        <Allproduct />

    </>
}

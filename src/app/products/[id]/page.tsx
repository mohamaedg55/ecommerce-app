import React from "react";
import { Button } from "@/components/ui/button";
import selectedproduct from "@/api/selectedproduct";
import Details from "@/app/-components/details/details";

export default async function productdetails({ params }: { params: { id: string } }) {
    const { id } = params;

    const data = await selectedproduct(id)
    return (
        <>
            <Details data={data} />
        </>
    );
}

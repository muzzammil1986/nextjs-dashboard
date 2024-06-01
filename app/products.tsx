import React from "react";
import { fetchProducts}  from "./lib/data";
import { ProductTable } from "./lib/definitions";
import Image from 'next/image';
//import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic';

export default async function Product(  ) {
   // noStore();
    const products = (await fetchProducts()) as ProductTable[];
    return (
        <>
        {<div>
        { products?.map((product, i) => (
           
                <div className="flex p-4 rounded-all" key={`${product.id}+${i}`}>
        
       
        <div className="bg-red-300"><Image src={product.image_path}
        alt={product.image_path}
        width={250}
        height={200}/></div> <div className="bg-red-400 flex w-4/5"> <div className="bg-red-400 flex-row"> 
        <div className="bg-red-400 flex p-2"> <strong>{product.title}</strong> </div> 
        <div className="bg-red-400 flex-row p-2">  <strong>Description:</strong> <br/>{product.description} </div>
        <div className="bg-red-400 flex-row p-2"> <strong>Review:</strong> <br/>{product.description} </div>

        <div className= "flex justify-center p-2 text-xl"><button className="border bg-blue-300 rounded border-teal-400 rounded-md">Click Here to Buy Now </button> </div> </div> </div>
        </div>))}</div>
}
        </>
    );
}
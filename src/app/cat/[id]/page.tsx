"use client";

import Spinner from '@/components/Spinner';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CatPage = () => {
    const [cat, setCat] = useState(null)
    const params = useParams<{id:string}>()

    async function fetchCat(){
        try {
            const res = await fetch(`https://api.thecatapi.com/v1/images/${params.id}`)

            if(res.ok) {
                const data = await res.json();
                setCat(data)
            } else{
                console.error("Failed to fetch cat data")
            }
        } catch (error) {
            console.error("Failed to fetch cat data",error);
        }
    }

    useEffect(() => {
        fetchCat();
    },[params.id])
    console.log(cat)

    if(!cat){
        return (
            <Spinner />
        )
    }

  return (
    <>
        
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
        <div className='flex flex-col justify-start items-start max-w-lg bg-gray-100 p-2'>
            <Link
                href={'/'}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            > Back to List
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
        
        <div className="max-w-lg max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
            
            <Image
                    src={(cat as any)?.url} 
                className='rounded-t-lg'
                height={700}
                width={700}
                alt='cat-pic'
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{(cat as any)?.breeds[0].name}</h5>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Origin: {(cat as any)?.breeds[0].origin}</h5>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Life Span: {(cat as any)?.breeds[0].life_span}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{(cat as any)?.breeds[0].description}</p>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default CatPage

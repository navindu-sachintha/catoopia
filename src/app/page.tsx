"use client"

import CatCard from "@/components/CatCard";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats]  = useState(null)
  async function fetchCats() {
    try {
      const headers = new Headers();
      const apiKey = process.env.NEXT_PUBLIC_CAT_API_KEY || '';
      headers.append('x-api-key', apiKey);

      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",{
        headers: headers
      })

      if(res.ok){
        const data = await res.json()
        setCats(data)
      } else {
        console.error("Error fetching data");
      }
      
    } catch (error) {
      console.error("Error fetching Data",error);
    }
  }

  useEffect(() =>{
    fetchCats();
  },[])

  if(!cats){
    return(
      <Spinner />
    )
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl sticky top-0 z-50 backdrop-blur max-h-screen p-4">
       <Header />
      </div>
      <div className="w-full max-w-4xl p-4 h-full max-h-screen overflow-y-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          {(cats as any).map((cat:any) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}

'use client'
import { useEffect, useState } from "react";
import CatCard from "./components/CatCard";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import Loader from "./components/Loader";

interface Breeds {
  name:string;
  origin: string;
  description:string;
}
interface Cat {
  id:string;
  url:string;
  breeds: Breeds[]
}

export default function Home() {
  const [cats, setCats] = useState<Cat[] | null>(null)
  async function fetchCats () {
    try{
      const headers = new Headers();
      const apiKey = process.env.NEXT_PUBLIC_CAT_API_KEY || '';
      headers.append('x-api-key',apiKey)
      const res = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",{
        headers:headers
      });

      if (res.ok){
        const data = await res.json()
        setCats(data)
      }
    }catch (e){
      console.error("Error fetching data", e)
    }
  }

  useEffect(() => {
    fetchCats();
  },[]);

  if(!cats){
    return (
      <Loader />
    )
  }
  return (
    <>
      <Container>
        <VStack>
          <Box maxH='20vh' p={4}>
            <Heading alignContent='center'>Catoopia</Heading>
          </Box>
          <Box maxH='80vh' overflowY='auto' p={2}>
            {cats.map((cat:Cat) => (
              <CatCard 
                key={cat.id} 
                url={cat.url} 
                name={cat.breeds[0]?.name}
                origin={cat.breeds[0]?.origin}
                description={cat.breeds[0]?.description}
                />
            ))}
          </Box>
        </VStack>
      </Container>
    </>
  );
}

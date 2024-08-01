'use client'

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Providers = ({children}:Props) => {
  return <ChakraProvider>{children}</ChakraProvider>
}


export default Providers

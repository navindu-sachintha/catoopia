import { Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Container maxW="container.xl">
        <Flex alignItems="flex-center">
            <Heading>404 - Not Found. Come Again Another day</Heading>
        </Flex>
    </Container>
  )
}

export default NotFound

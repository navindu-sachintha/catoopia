'use client'
import { Avatar, Container, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import CatModal from './CatModal';

interface Props {
    url:string;
    name:string;
    origin:string;
    description:string;
}

const CatCard = ({url, name, origin, description}:Props) => {
  return (
    <Container>
      <Flex p={2} alignItems="center">
        <HStack spacing={4} width="full">
          <Avatar size="lg" name={name} src={url} />
          <Text flex="1" textAlign="left">{name}</Text>
          <CatModal name={name} url={url} origin={origin} desc={description} />
        </HStack>
      </Flex>
    </Container>
  )
}

export default CatCard

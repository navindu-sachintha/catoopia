'use client'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Avatar, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack, Text, Stack } from '@chakra-ui/react'
import React from 'react'

interface Props {
    name:string;
    url:string;
    origin:string;
    desc:string;
}

const CatModal = ({name, url, origin, desc}:Props) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
        <Button onClick={onOpen} variant='outline' rightIcon={<ArrowForwardIcon/>} size='md'>View More</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack p={1}>
                      <Avatar size='xl' src={url}/>
                    </VStack>
                    <VStack alignItems='flex-start'>
                        <Text fontSize='xl'>Origin: {origin}</Text>
                        <Text fontSize='md'>{desc}</Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
        
    </>
  )
}

export default CatModal

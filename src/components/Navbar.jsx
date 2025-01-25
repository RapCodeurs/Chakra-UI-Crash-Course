import { UnlockIcon } from '@chakra-ui/icons';
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

function Navbar() {

  const toast = useToast();

  const handleClick = () => {

    const isLogout = true;

    if(isLogout){
      toast({
        title: 'Logout',
        description: 'Successfull',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
        icon: <UnlockIcon/>
      }) 
    } else {
      toast({
        title: 'Logout',
        description: 'Successfull',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true
      }) 
    }
  }

  return (
    <Flex as='nav' p='10px' m='10px' alignItems='center' mb='40px'>
        <Heading as='h1'>Maurel DOCS</Heading>
        <Spacer />
        
        <HStack spacing='20px'> 
            <Avatar name='mario' src='/img/mario.png'>
              <AvatarBadge width='1.3em' bg='teal.400'>
                <Text fontSize='xs' color='white'>3</Text>
              </AvatarBadge>
            </Avatar>

            <Text>maureljoumessi9@gmail.com</Text>
            <Button onClick={handleClick} colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>
    // <Flex bg='gray.200' justify='space-between' wrap='wrap' gap='2'>
    //     <Box w='150px' h='50px' bg='red'>1</Box>
    //     <Box w='150px' h='50px' bg='yellow'>2</Box>
    //     <Box w='150px' h='50px' flexGrow='1' bg='blue'>3</Box>
    //     <Box w='150px' h='50px' flexGrow='2' bg='green'>4</Box>
    // </Flex>
  )
}

export default Navbar
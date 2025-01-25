import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {

  const tasks = useLoaderData();

 

  return (
    <SimpleGrid spacing={10} p='10px' minChildWidth='300px'>
      {/* <Box bg='white' h='200px' border='1px solid'>
        <Text color={{base: 'blue', md: 'black', lg: 'red'}}>Hello Maurel</Text>
      </Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box> */}

      {tasks && tasks.map(task => (
        <Card key={task.id} p='10px' borderTop='8px' borderColor='purple.200' bg='white'>
          <CardHeader>
            <Flex gap='10px'>
              <Avatar src={task.img} />
              <Box>
                <Heading as='h3' size='sm'>{task.title}</Heading>
                <Text>{task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color='gray.500'>
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor='gray.300'/>

          <CardFooter justify='center'>
            <HStack>
              <Flex gap='10px'>
                <Button variant='ghost' leftIcon={<ViewIcon/>} colorScheme='purple'>Watch</Button>
                <Button variant='ghost' leftIcon={<EditIcon/>} colorScheme='purple'>Comments</Button>
              </Flex>
            </HStack>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
    
  )
}


export const loaderFetch = async () => {
  const res = await fetch('http://localhost:3000/tasks');

  return res.json();;
}
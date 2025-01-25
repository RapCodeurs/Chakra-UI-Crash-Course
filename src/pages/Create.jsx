import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
   <Box maxWidth='480px'>
    <Form method="post" action="/create">
      <FormControl isRequired mb='40px'>
        <FormLabel>Task name : </FormLabel>
        <Input type='text' name='title'/>
        <FormHelperText>Enter a descriptive task name</FormHelperText>
      </FormControl>

      <FormControl mb='40px'>
        <FormLabel>Task description</FormLabel>
        <Textarea placeholder="Enter details..." name="description"/>
      </FormControl>

      <FormControl display='flex' alignItems='center' mb='40px'>
        <Checkbox name='isProprety' size='lg' colorScheme='purple'/>
        <FormLabel mb='0' ml='10px'>Make this a priority tasks</FormLabel>
      </FormControl>

      <Button type='submit' colorScheme="purple">Submit</Button>
    </Form>
   </Box>
  )
}


export const createAction = async({request}) => {
  const data = await request.formData();

  const task = {
    title : data.get('title'),
    description : data.get('description'),
    isProprety: data.get('isProprety') === ''
  }

  console.log(task);
  return redirect('/');


}
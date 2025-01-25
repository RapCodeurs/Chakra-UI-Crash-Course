import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt='40px' p='20px' colorScheme="purple" variant='enclosed'>
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Account infos</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task history</Tab>
      </TabList>
  
      <TabPanels>
        <TabPanel mt='30px'>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email : maureljoumessi9@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Ok, je vais devoir tout casser pour etre le meilleur.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Ma femme est tout ce que j'ai.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel mt='30px'>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400'/>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repellat nobis doloremque, itaque quia sed quidem id doloribus, repudiandae ipsa dolore! Qui obcaecati sit a cupiditate sint doloribus officiis reiciendis?
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400'/>
              Ok, je vais devoir tout casser pour etre le meilleur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400'/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi at maiores autem nostrum, praesentium accusamus dolores, dolorem corporis ad dolor rem ab saepe? Nam enim magni sed quod voluptas.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='teal.400'/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi at maiores autem nostrum, praesentium accusamus dolores, dolorem corporis ad dolor rem ab saepe? Nam enim magni sed quod voluptas.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color='red.400'/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi at maiores autem nostrum, praesentium accusamus dolores, dolorem corporis ad dolor rem ab saepe? Nam enim magni sed quod voluptas.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

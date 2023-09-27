import {
Flex,
Text,
Input,
Button,
Tabs,
TabsList,
Tab,
TabPanels,
TabPanel,
Checkbox,
IconButton,
} from "@chakra-ui/react"
import {DeleteIcon} from "@chakra-ui/icons" 
import { useState } from "react"

const App = () => {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState ([])

  const addTask = e => {
e.preventDefault()

  if (newTask.length > 0){
setTask(prevState => [
  ...prevState,
  {text: newTask, newTask,isChecked: false}
])
setNewTask("")
  }
  }

   const udpateTask = (index, checked) => {
    let newTask = [...tasks]
    newTasks[index].isChecked = checked
    setTasks(newTasks)
   }

   const removeTask = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
   }
  return (
<>
<Flex w="100%" h="100vh"> 
  <Flex w="100%" FlexDir="column" ml="20%" mt="5%" mr="20%" color="white">
    <Text fontWeight="700" fontSize={30}>Task</Text>
   <form onSubmit={addTask}>
   <Flex mt="2%">
    <Input value={newTask} onChange={e => setNewTask(e.target.value)} variant="flushed" placeholder="Add Task" w="50%" ></Input>
    <Button onClick={addTask} ml={5} bg="blue.400">Add Task</Button>
    </Flex>
   </form>
  </Flex>   
  <Tabs mt="2%" w="100%">
   <TabsList>
    <Tab>Incomplete task</Tab>
    <Tab>Completed task</Tab>
    </TabsList>
     <TabsPanels>
     <TabPanel>
      {tasks.map((task, index) =>(
        !task.isChecked ? <TaskItem removeTask={removeTask} updateTask={udpateTask} key={index} task={task} index={index}></TaskItem>: null
      ))}
    </TabPanel>
    <TabPanel>
    {tasks.map((task, index) =>(
        !task.isChecked ? <TaskItem removeTask={removeTask} udpateTask={udpateTask} key={index} task={task} index={index}></TaskItem>: null
      ))}
    </TabPanel>
    
   </TabsPanels>
  </Tabs>
</Flex>

</>

)
}
const TaskItem = ({tasks, index, udpateTask, removeTask}) => {
  return(
    <Checkbox onChange={e => udpateTask(index, e.target.checked)} colorScheme="green" mb={10} w="100%" FlexDir="row" isChecked={task.isChecked}>
      <Flex w="100%" FlexDir="row">
        <Text color="white" alignSelf="center" >{task.text} </Text>
        <IconButton onClick={() => removeTask(index)} bg="red.600" pos="absolute" right={0} icon={<DeleteIcon />}></IconButton>
      </Flex>
    </Checkbox>
  )
}

export default App
import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"
import { useState } from "react"

function App() {
 
  
const [todos, setTodos] = useState([
  'go to the gym',
  'eat veg', 
  'pick up kids'
])


function handleAddTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  setTodos(newTodoList)
}
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
     </>
  )
}

export default App

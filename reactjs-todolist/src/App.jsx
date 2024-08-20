import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"
import { useState } from "react"

function App() {
 
  
const [todos, setTodos] = useState([

])

function handleDeleteTodo (index){
const newTodoList = todos.filter((todo, todoIndex) => {
  return todoIndex !== index
  })
  setTodos(newTodoList)
}

function handleEditTodo (Index){

}

function handleAddTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  setTodos(newTodoList)
}
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
     </>
  )
}

export default App

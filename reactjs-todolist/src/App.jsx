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
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}

function handleAddTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  setTodos(newTodoList)
}
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue ={setTodoValue} 
      handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
     </>
  )
}

export default App

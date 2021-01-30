import React,{useState, useEffect}from 'react'
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])
  const[status,setStatus]=useState('all')
  const[filteredTodos,setFilteredTodos]=useState([])
  useEffect(() => {
   filterHandler()
   saveLocalTodos()
  }, [todos,status])
  const saveLocalTodos=()=>{
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]))
      }
      else{
        localStorage.setItem("todos",JSON.stringify([todos]))
      }
  }
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break;
       default:
         setFilteredTodos(todos)
         break;
    }
  }
  return (
    <div className="App">
      <p>{inputText}</p>
      <Form setInputText={setInputText}
       todos={todos} setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        />
      <TodoList todos={todos} setTodos={setTodos}
      filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

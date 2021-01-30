import React from 'react'

import Todo from './Todo'
const TodoList=(props)=>{
    console.log(props.todos)
    return(
        <div className="todo-container">
        <ul className="todo-list">
           {
               props.filteredTodos.map((todo)=>(
                <Todo text={todo.text} setTodos={props.setTodos} todos={props.todos} todo={todo}/>
            ))
           }
            
        </ul>
      </div>
    )

}
export default TodoList
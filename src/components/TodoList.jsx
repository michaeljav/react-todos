
import React, { Fragment } from 'react'
import { TodoItems } from './TodoItems';

export  function TodoList({ todos, toggleTodo }) {
  console.log({todos});
  return (
    // <Fragment>
   <ul>
      {/* <li key={}>{ todos }</li> */}
      {/* <li>{JSON.stringify(todos)}</li>
      <li>{JSON.stringify(todos[0])}</li>
      <li>{JSON.stringify(todos[0].id)}</li>
      <li>{todos[0].id}</li> */}
        {
          todos.map((todo) => ( 
          // <li key={todo.id}>{todo.task}</li>
          <TodoItems key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          )        
          )
        }
   </ul>
  //  </Fragment>
  )
}

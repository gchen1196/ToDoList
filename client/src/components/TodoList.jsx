import React from 'react';
import TodoEntry from './TodoEntry.jsx';


//use filter method to filter out completed and not completed lists
const TodoList = props => {
  return (
    <div>
      { props.todos.map(todo => <TodoEntry key={todo._id} id={todo._id} content={todo.content} removeTodo={props.removeTodo} />) }
    </div>
  )
}

export default TodoList; 
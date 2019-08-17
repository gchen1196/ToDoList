import React from 'react';
import TodoEntry from './TodoEntry.jsx';

const TodoList = props => {
  return (
    <div>
      { props.todos.map(todo => <TodoEntry key={todo._id} id={todo._id} content={todo.content} completion={todo.completion} removeTodo={props.removeTodo} updateTodo={props.updateTodo} />) }
    </div>
  )
}

export default TodoList; 
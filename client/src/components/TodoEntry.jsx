import React from 'react';
import TodoEntryStyled from '../styledcomponents/TodoEntryStyled.js';

const TodoEntry = props => {

  const id = {
    _id: props.id
  };

  let textColorChange = props.completion ? 'red': 'normal';

  let toCross = props.completion ? <strike>{props.content}</strike>: props.content;

  return (
    <TodoEntryStyled>
      <div className='wrapper-entry'>
        <input
          type="checkbox"
          checked={props.completion}
          onChange={() => props.updateTodo(id, null, !props.completion)} 
        />
        <span className={textColorChange}>{toCross}</span>
        <button onClick={() => props.removeTodo(id)}>
          X
        </button>
      </div>
    </TodoEntryStyled>
  )
}

export default TodoEntry;
import React from 'react';
import TodoEntryStyled from '../styledcomponents/TodoEntryStyled.js';

const TodoEntry = props => {

  const id = {
    _id: props.id
  };

  let textColorChange = 'normal';

  if (props.completion) {
    textColorChange = 'red';
  }

  return (
    <TodoEntryStyled>
      <div className='wrapper-entry'>
        <input
          type="checkbox"
          checked={props.completion}
          onChange={() => props.updateTodo(id, null, !props.completion)} 
        />
        <span className={textColorChange}> {props.content}</span>
        <button onClick={() => props.removeTodo(id)} >
          X
        </button>
      </div>
    </TodoEntryStyled>
  )
}

export default TodoEntry;
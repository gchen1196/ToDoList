import React from 'react';
import TodoEntryStyled from '../styledcomponents/TodoEntryStyled.js';

class TodoEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const id = {
      _id: this.props.id
    };

    return (
      <TodoEntryStyled>
        <div className='wrapper-entry'>
          <input
            type="checkbox"
            checked={this.props.completion}
            onChange={() => this.props.updateTodo(id, null, !this.props.completion)} 
          />
          <span>{this.props.content}</span>
          <button onClick={() => this.props.removeTodo(id)} >
            X
          </button>
        </div>
      </TodoEntryStyled>
    )
  }
}

export default TodoEntry;
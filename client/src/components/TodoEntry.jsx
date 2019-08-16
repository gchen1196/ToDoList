import React from 'react';

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
      <div>
        <input
          type="checkbox"
          onChange={() => this.props.updateTodo(id, null, !this.props.completion)} 
        />
        <span>{this.props.content}</span>
        <button onClick={() => this.props.removeTodo(id)} >
         Remove
        </button>
      </div>
    )
  }
}

export default TodoEntry;
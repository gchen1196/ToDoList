import React from 'react';
import axios from 'axios';

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
        <div>{this.props.content}</div>
        <button onClick={() => this.props.removeTodo(id)} >
         Remove
        </button>
      </div>
    )
  }
}

export default TodoEntry;
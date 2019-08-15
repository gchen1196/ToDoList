import React from 'react';

class AddTodoBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      completion: false
    };
  }

  onInputChange(e) {
    this.setState({ content: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.content === '') {
      alert('Type a To Do')
    }
    else {
      this.props.addTodo(this.state);
      this.setState({ content: '' });
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <label>
          To Do: 
          <input type="text" value={this.state.content} onChange={(e) => this.onInputChange(e)} />
        </label>
      </form>
    )
  }
};

export default AddTodoBar;
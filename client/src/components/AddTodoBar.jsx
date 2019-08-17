import React from 'react';
import AddTodoBarStyled from '../styledcomponents/AddTodoBarStyled.js';

class AddTodoBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'What to do...',
      completion: false
    };
  }

  onInputChange(e) {
    this.setState({ content: e.target.value });
  }

  onInputClick() {
    this.setState({ content: '' });
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
      <AddTodoBarStyled>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label>
            <input type="text" value={this.state.content} maxLength='43' onClick={() => this.onInputClick()} onChange={(e) => this.onInputChange(e)} />
          </label>
        </form>
      </AddTodoBarStyled>
    )
  }
};

export default AddTodoBar;
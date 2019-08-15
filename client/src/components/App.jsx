import React from 'react';
import axios from 'axios';
import TodoList from './TodoList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.removeTodo = this.removeTodo.bind(this);
    this.getTodos = this.getTodos.bind(this);
  }

  getTodos() {
    axios.get('/todos')
    .then(result => {
      this.setState({todos: result.data});
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getTodos();
  }

  removeTodo(id) {
    axios.delete('/todo', { data: id })
      .then(result => {
        this.getTodos();
      })
      .catch(error => {
        console.log('failed');
      })
  }

  render() {
    return (
      <div>
        <h1>Much To Do List</h1>
        {/* <AddTodoBar />
        <ShowAllBtn />
        <CompletedBtn />
        <IncompleteBtn /> */}
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        {/* <DeleteBtn /> */}
      </div>
    )
  }
}

export default App; 
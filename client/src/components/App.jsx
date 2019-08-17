import React from 'react';
import axios from 'axios';
import TodoList from './TodoList.jsx';
import AddTodoBar from './AddTodoBar.jsx';
import AppStyled from '../styledcomponents/AppStyled.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      completedTodos: [],
      uncompleteTodos: [],
      showAll: true,
      showCompleted: false,
      showUncomplete: false
    }
    this.removeTodo = this.removeTodo.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeAllTodos = this.removeAllTodos.bind(this);
  }

  getTodos() {
    axios.get('/todos')
    .then(result => {
      this.setState({
        allTodos: result.data,
        completedTodos: result.data.filter(todo => todo.completion === true),
        uncompleteTodos: result.data.filter(todo => todo.completion === false)
      });
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
        console.log('failed to remove todo');
      })
  }

  removeAllTodos() {
    axios.delete('/todos')
    .then(result => {
      this.getTodos();
    })
    .catch(error => {
      console.log('fail to delete all todos');
    })
  }

  addTodo(obj) {
    axios.post('/todos', obj)
      .then(result => {
        this.getTodos();
      })
      .catch(error => {
        console.log('failed to post todo')
      })
  }

  updateTodo(id, changedContent = null, changedCompletion = null) {
    if (changedCompletion !== null) {
      const toUpdate = {
        completion: changedCompletion
      }
      const data = { id, toUpdate };
      axios.put('/todos', data)
        .then(result => {
          this.getTodos();
        })
        .catch(error => {
          console.log('failed to update');
        })
    }
  }

  onShowAllClick() {
    this.setState({
      showAll: true,
      showCompleted: false,
      showUncomplete: false
    })
  }

  onShowUncompletedClick() {
    this.setState({
      showAll: false,
      showCompleted: false,
      showUncomplete: true
    })
  }

  onShowCompletedClick() {
    this.setState({
      showAll: false,
      showCompleted: true,
      showUncomplete: false
    })
  }

  onDeleteAllClick() {
    this.removeAllTodos();
  }

  render() {
    var todos = this.state.allTodos;
    if (this.state.showCompleted) {
      todos = this.state.completedTodos;
    }
    if (this.state.showUncomplete) {
      todos = this.state.uncompleteTodos;
    }
    return (
      <AppStyled>
        <h1>Much To Do List</h1>
        <div className='main-wrapper'>
          <AddTodoBar addTodo={this.addTodo} />
          <div className='button-wrapper'>
            <div className='button showAll' onClick = {() => this.onShowAllClick()}>
              To Dos and Dones
            </div>
            <div className='button showUncompleted' onClick = {() => this.onShowUncompletedClick()}>
              To Dos
            </div>
            <div className='button showCompleted' onClick = {() => this.onShowCompletedClick()}>
              Dones 
            </div>
          </div>
          <TodoList todos={todos} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
          <div className='buttonDeleteAll' onClick ={() => this.onDeleteAllClick()}>
            Clear List
          </div>
        </div>
      </AppStyled>
    )
  }
}

export default App; 
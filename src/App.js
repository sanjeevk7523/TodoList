import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="bg-success">hello from the app</h1>
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;

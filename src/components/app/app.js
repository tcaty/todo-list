import React from 'react';
        
import Label from '../label';
import AddPanel from '../add-panel';
import TodoList from '../todo-list';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <Label label={'Todo list'}/>
      <AddPanel />
      <TodoList />
    </div>
  );
};

export default App;
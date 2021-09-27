import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
        
import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {

  const renderedTodoItems = useMemo(() => (
    todos.map((todoItem, index) => <TodoListItem todoItem={todoItem} key={index}/>)
  ), [todos]);

  return (
    <ul className="todo-list">
      {renderedTodoItems}
    </ul>
  );
};

const mapStateToProps = ({ todoList: { todos }}) => {
  return { todos };
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(TodoList);
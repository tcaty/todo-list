import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar, AiOutlineDelete } from 'react-icons/ai';   
import { connect } from 'react-redux';   
import PropTypes from 'prop-types';

import { toggleDoneField, toggleImportantField, deleteTodoItem } from '../../actions';

import './todo-list-item.css';

const TodoListItem = ({ todoItem: { label, important, done, id }, toggleDoneField, toggleImportantField, deleteTodoItem }) => {
  return (
    <li className="todo-list-item">
      <div  className="todo-list-item__left-side">
        <div 
          onClick={() => toggleDoneField(id)}
          className="todo-list-item__done-mark">
          <div>{done ? <FaCheck/> : null}</div>
        </div>
        <div className={`todo-list-item__label${done ? '_done' : ''}`}>{label}</div>
      </div>
      <div className="todo-list-item__right-side">
        <button 
          onClick={() => deleteTodoItem(id)}
          className="todo-list-item__delete-btn">
            <AiOutlineDelete />
        </button>
        <button 
          onClick={() => toggleImportantField(id)}
          className={`todo-list-item__important-btn${important ? '_important' : ''}`}>
            {important ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDoneField: (id) => dispatch(toggleDoneField(id)),
    toggleImportantField: (id) => dispatch(toggleImportantField(id)),
    deleteTodoItem: (id) => dispatch(deleteTodoItem(id))
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
  done: PropTypes.bool,
  id: PropTypes.number,
  toggleDoneField: PropTypes.func,
  toggleImportantField: PropTypes.func,
  deleteTodoItem: PropTypes.func
}

export default connect(null, mapDispatchToProps)(TodoListItem);
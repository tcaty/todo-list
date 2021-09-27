import {
  TODO_ITEM_ADDED,
  TODO_ITEM_DELETED,
  TODO_ITEM_FIELD_TOGGLED
} from './action-types';

const addTodoItem = (payload) => {
  return {
    type: TODO_ITEM_ADDED,
    payload
  }
};

const deleteTodoItem = (payload) => {
  return {
    type: TODO_ITEM_DELETED,
    payload
  }
};

const toggleTodoItemField = (fieldName) => {
  return (payload) => {
    return {
      type: TODO_ITEM_FIELD_TOGGLED,
      payload: {
        fieldName,
        id: payload
      }
    }
  }
};

const toggleImportantField = toggleTodoItemField('important');
const toggleDoneField = toggleTodoItemField('done');

export {
  addTodoItem,
  deleteTodoItem,
  toggleImportantField,
  toggleDoneField
};
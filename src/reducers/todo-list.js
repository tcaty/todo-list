import {
  TODO_ITEM_ADDED,
  TODO_ITEM_DELETED,
  TODO_ITEM_FIELD_TOGGLED
} from '../actions/action-types';

const createTodoItem = (id, label) => (
  { 
    id,
    label,
    important: false,
    done: false
  }
);

const initialState = {
  todos: [
    createTodoItem(1, 'Do a homework'),
    createTodoItem(2, 'Train typing'),
    createTodoItem(3, 'Go for a walk with John'),
    createTodoItem(4, 'Wash the dishes'),
    createTodoItem(5, 'Drink tea')
  ],
  nextId: 6
};

const createNewTodoItem = (state, label) => {
  return {
    id: state.todoList.nextId,
    label,
    important: false,
    done: false
  }
}

const addTodoItem = (state, label) => {
  return [
    createNewTodoItem(state, label),
    ...state.todoList.todos,
  ]
}

const deleteTodoItem = ({ todoList: { todos }}, id) => {
  const index = todos.findIndex(item => item.id === id);
  return [
    ...todos.slice(0, index),
    ...todos.slice(index + 1)
  ]
}

const toggleTodoItemField = (item, fieldName) => {
  return {
    ...item,
    [fieldName]: !item[fieldName]
  }
}

const updateTodosWhenToggle = ({ todoList: { todos }}, { fieldName, id}) => {
  const index = todos.findIndex(item => item.id === id);
  return [
    ...todos.slice(0, index),
    toggleTodoItemField(todos[index], fieldName),
    ...todos.slice(index + 1)
  ]
}


const updateTodoList = (state, action) => {

  if (state === undefined) {
    return initialState;
  }  

  switch (action.type) {

    case TODO_ITEM_ADDED:
      return {
        todos: addTodoItem(state, action.payload),
        nextId: state.todoList.nextId + 1
      }

    case TODO_ITEM_FIELD_TOGGLED:
      return {
        ...state.todoList,
        todos: updateTodosWhenToggle(state, action.payload)
      }

    case TODO_ITEM_DELETED:
      return {
        ...state.todoList,
        todos: deleteTodoItem(state, action.payload)
      }

    default: return initialState;
  }
}

export default updateTodoList;
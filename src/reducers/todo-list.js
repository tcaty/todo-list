import {
  TODO_ITEM_ADDED,
  TODO_ITEM_DELETED,
  TODO_ITEM_FIELD_TOGGLED
} from '../actions/action-types';

const initialState = {
  todos: [
    {
      id: 1,
      label: 'Do a homework',
      important: false,
      done: false
    },
    {
      id: 2,
      label: 'Train typing',
      important: false,
      done: false
    },
    {
      id: 3,
      label: 'Go for a walk with John',
      important: false,
      done: false
    },
    {
      id: 4,
      label: 'Wash the dishes',
      important: false,
      done: false
    },
    {
      id: 5,
      label: 'Drink tea',
      important: false,
      done: false
    }
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
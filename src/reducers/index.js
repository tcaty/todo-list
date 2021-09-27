import updateTodoList from "./todo-list";

const reducer = (state, action) => {
  return {
    todoList: updateTodoList(state, action)
  }
};

export default reducer;
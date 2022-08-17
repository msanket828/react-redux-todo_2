import { ADD_TODO, DELETE_TODO } from "../constant";

const addTodo=(data)=> {
  return {
    type:ADD_TODO,
    data: data
  }
}

export default addTodo;

export const deleteTodo=(data)=> {
  return {
    type: DELETE_TODO,
    data: data
  }
}
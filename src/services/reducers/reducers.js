import { ADD_TODO, DELETE_TODO } from "../constant";
const initialState = [
  { id: 1, title: 'feed the cat' }
]
export default function todoFunction(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.data];
    case DELETE_TODO:      
      return state.filter((item)=>item.id !== action.data.id);
    default:
      return state;
  }
}
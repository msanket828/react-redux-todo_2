import ViewTodos from "../components/ViewTodos";
import { connect } from "react-redux/es/exports";
import { deleteTodo, updateTodo } from "../services/actions/actions";



const mapStateToProps=state=>({
  data:state.todoFunction
})

const mapDispatchToProps=dispatch=>({
  deleteTodoHandler:data=>dispatch(deleteTodo(data)),
  editHandler:data=>dispatch(updateTodo(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(ViewTodos);
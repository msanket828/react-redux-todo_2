import ViewTodos from "../components/ViewTodos";
import { connect } from "react-redux/es/exports";
import { deleteTodo } from "../services/actions/actions";



const mapStateToProps=state=>({
  data:state.todoFunction
})

const mapDispatchToProps=dispatch=>({
  deleteTodoHandler:data=>dispatch(deleteTodo(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(ViewTodos);
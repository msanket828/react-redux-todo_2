import AddTodo from "../components/AddTodo";
import { connect } from "react-redux";
import addTodo from "../services/actions/actions";

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addTodoHandler: data => dispatch(addTodo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const AddTodo = (props) => {
  const [indTodo, setIndTodo]=useState('');

  const todoHandler=(e)=> {
    setIndTodo(e.target.value);
  }

  const submitHandler=(e)=> {
    e.preventDefault();
    const newIndTodo={
      id: uuidv4(),
      title: indTodo
    }
    props.addTodoHandler(newIndTodo);
    setIndTodo('');
  }

  return (
    <div className='add-todo my-4'>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="TodoText">TodoText</label>
            <input type="text" name="" id="" className='form-control' placeholder='Enter Todo' onChange={todoHandler} value={indTodo} />
          </div>
          <div className="text-center">
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTodo
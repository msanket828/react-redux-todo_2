import React from 'react'
import IndViewTodo from './IndViewTodo';

const ViewTodos = ({ data, deleteTodoHandler }) => {
  return (
    <div className='view-todo'>
      <div className="container">
        <ul>
          {
            data.map((item, index) => <IndViewTodo index={index} key={item.id} item={item} onClick={deleteTodoHandler} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default ViewTodos
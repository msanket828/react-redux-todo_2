import React from 'react'

const IndViewTodo = ({index,item,onClick}) => {  
  return (
    <li className='d-flex align-items-center p-2 mb-2'>
      <h2 className='mr-2'>{index + 1}. {item.title}</h2>
      <button className='btn btn-danger ml-auto' onClick={()=>onClick(item)}>Delete</button>
    </li>
  )
}

export default IndViewTodo
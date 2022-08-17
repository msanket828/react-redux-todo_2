import React, { useState } from 'react'

const IndViewTodo = ({ index, item, onClick, editHandler }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');

  const editSupportHandler = (item) => {
    setSelectedItemId(item.id);
    setSelectedItem(item.title);
  }

  const todoTitleChangeHandler = (e) => {
    setSelectedItem(e.target.value);
  }

  const handleEditSubmit = () => {
   editHandler({
      id: selectedItemId,
      title: selectedItem
    })
  setSelectedItem('');
  setSelectedItemId('');
  }

  return (
    <li className='d-flex align-items-center p-2 mb-2'>
      <div className='mr-2'>
        {
          selectedItemId ? (
            <input type="text" placeholder="update todo" onChange={todoTitleChangeHandler} value={selectedItem} />
          ) :
            (
              <h2>{index + 1}. {item.title}</h2>
            )
        }
      </div>
      <div className=' ml-auto'>
        {
          selectedItemId ? (
            <button className='btn btn-primary' onClick={handleEditSubmit}>Update</button>
          ) : (
            <>
              <button className='btn btn-success' onClick={() => editSupportHandler(item)}>Edit</button>
              <button className='btn btn-danger ml-2' onClick={() => onClick(item)}>Delete</button>
            </>
          )
        }
      </div>
    </li>
  )
}

export default IndViewTodo
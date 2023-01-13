import { useState } from 'react'

export default function NewCharacterForm() {


  return (
    <div>
      <h3>Add your own character:</h3> 
      <form id='new-form'>
        <input
              type="text"
              placeholder="name"
              name='name'
            />

        <input
              type="text"
              placeholder="image"
              name='image'
            />

        <select name='isGood'>
        <option value=''>Good/Bad</option>
          <option value={true}>Good 😇</option>
          <option value={false}>Bad 😈</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}
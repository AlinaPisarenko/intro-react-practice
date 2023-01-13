import { useState } from 'react'

export default function NewCharacterForm({ addNewMonster }) {
  // const [name, setName] = useState('')
  // const [image, setImage] = useState('')
  // const [isGood, setIsGood] = useState('')
  const initialValues = {
    name: "",
    image: "",
    isGood: ""
  }
  const [formData, setFormData] = useState(initialValues)
  // console.log(formData)
  
  const { name,image,isGood } = formData

  // this function runs every time input changes
  const handleOnChange = (e) => {
    // destructuring e.target
    const { name, value } = e.target
    //updating state using spread operator
    setFormData(formData => ({...formData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // calling function and passing it an object with all the new values
    addNewMonster(formData)
    // setting formData to the original object
    // it clears out the form after we click submit(because we are controlling form with the state)
    setFormData(initialValues)
  }

  return (
    <div>
      <h3>Add your own character:</h3> 
      <form id='new-form' onSubmit={handleSubmit}>
        <input
              type="text"
              placeholder="name"
              name='name'
              value={name}
              onChange={handleOnChange}
            />

        <input
              type="text"
              placeholder="image"
              name='image'
              value={image}
              onChange={handleOnChange}
            />

        <select name='isGood' value={isGood} onChange={handleOnChange}>
        <option value=''>Good/Bad</option>
          <option value={true}>Good 😇</option>
          <option value={false}>Bad 😈</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}
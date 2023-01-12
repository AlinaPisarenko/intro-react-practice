import React from 'react'

export default function CharacterCard({ monster }) {
console.log(monster)

const { name, image } = monster
// Object destructuring:
//  This `const { name, image } = monster` 
//             is the same as
//       `const name = monster.name
//        const image = monster.image`
  
//   As long as you name your variables the same as keys in the object, destructuring will work

  return (
    <div className="CharacterCard">
      <h3>{name}</h3>
      <img src={image}></img>
      <button>Replace me 👀</button>
      <button className="remove-btn">REMOVE</button>
    </div>
  )
}

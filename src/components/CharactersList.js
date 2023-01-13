import CharacterCard from "./CharacterCard"

export default function CharactersList({ monsters }) {
  //Always check your data
  //It will save you a lot of time if you make a mistake
  console.log(monsters)

  return (
    <div className='CharactersList'>
      {/* 
      1. mapping through monsters array and return CharacterCard component for every object in the array
      2. passing each object as a prop to CharacterCard component: monster={monster} 
      3. Don't forget return keyword 🙂
      */}
      {monsters.map(monster => {
        return <CharacterCard key={monster.id} monster={monster} />
      })}
    </div>
  )
}


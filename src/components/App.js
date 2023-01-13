import { useEffect, useState } from 'react'
import '../App.css';
import CharactersList from './CharactersList';
import NewCharacterForm from './NewCharacterForm';

function App() {
const [monsters,setMonsters] = useState([])


// using useEffect to update to fetch data and then set it to monsters state
// dependency array is empty, so useEffect will only run once the app loads the first time
useEffect(() => {  
  fetch('http://localhost:3000/characters')
  .then(res => res.json())
  .then(data => setMonsters(data))
}, [])

//function accepts newObj as argument passed from newCharacterForm component
const addNewMonster = (newObj) => {
  // sending new object to a database
  fetch('http://localhost:3000/characters', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
  .then(r => r.json())
   // updating monsters state adding new object to an array using spread operator
  .then(data => setMonsters([...monsters, data]))
}

  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        <NewCharacterForm addNewMonster={addNewMonster}/>
        {/* passing monsters array to CharactersList component */}
        <CharactersList monsters={monsters}/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import '../App.css';
import data from "../data"
import CharactersList from './CharactersList';

function App() {
const [count, setCount] = useState(0)
const [monsters,setMonsters] = useState(data)
console.log(monsters)

const handleClick = () => {
  setCount(prevState => prevState + 1)
  setCount(prevState => prevState + 1)
  console.log('inside the function', count)
  }
  console.log("outside the function", count)

  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        {/* passing monsters array to CharactersList component */}
        <CharactersList monsters={monsters}/>

        <h3>{count}</h3>
        <button onClick={handleClick}>+</button>

    </div>
  );
}

export default App;

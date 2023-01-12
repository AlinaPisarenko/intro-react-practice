import { useState } from 'react'
import '../App.css';
import projects from "../data"
import CharactersList from './CharactersList';

function App() {
  const [count, setCount] = useState(0)

const handleClick = () => {
console.log('inside the function', count)
}
console.log("outside the function", count)

  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        
         <h3>{count}</h3>
         <button onClick={handleClick}>+</button>
        <CharactersList/>
    </div>
  );
}

export default App;

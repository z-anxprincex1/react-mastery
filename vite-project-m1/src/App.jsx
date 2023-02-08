import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    console.log(e.target)
  }

  const hoverOver = (e) => {
    console.log(e.target)
  }

  return (
    <div className="App">
        <button onClick={handleClick}>click</button>
        <button onMouseOver={hoverOver}>hover over</button>
    </div>
  )
}

export default App

import './App.css';
import { useState } from 'react';

function App() {

  let name = "mario"
  
  const handleClick = () => {
    name = "luigi"

    window.alert(name)
  }

  return (
    <div className="App">
      <h1 className="name">{name}</h1>
      <button className='clicker' onClick={handleClick}>Check Name</button>
    </div>
  );
}

export default App;

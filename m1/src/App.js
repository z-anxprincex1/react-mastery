import './App.css';
import { planets } from './data/planets.js';
import { useState } from 'react';

function App() {

  // Component naming should always start with caps

  const [number1, setNumber1] = useState(16)

  const [number2, setNumber2] = useState(0)

  const [showText, setShowText] = useState(true)

  const ReturnNumber = (props) => {
    return (props.number > 100 ? 
    <h1>number is greater than 100</h1> : <h1>number is not greater than 100</h1>)
  }

  const Test1 = (props) => {
    return (<h1>Heyy there {props.name}!</h1>);
  } 

  const Planets = (props) => {
    return (<h1>name: {props.planet} is gas giant? {props.isGasGiant ? "yes" : "no"}</h1>)
  }

  return (
    <div className="App">
      <Test1 name="Anand Prince"/>
      <ReturnNumber number={number1}/>
      <div>
        {planets.map((planet, key) => {
          return <Planets planet={planet.name} isGasGiant={planet.isGasPlanet} key={key}/>
        })}
      </div>

      <div>
        {number1} <button onClick={() => {
          setNumber1(number1 + 1)
        }}>increase age</button>
      </div>

      {showText && <h1>showing text, click below to hide</h1>}
      <button onClick={() => {
        setShowText(!showText)
      }}>{showText ? "hide" : "show" } text</button>


      <br/>{number2} 
      
      <button onClick={() => {
        setNumber2(number2 + 1)
      }}>Increase</button>

      <button onClick={() => {
        setNumber2(number2 - 1)
      }}>Decrease</button>

      <button onClick={() => {
        setNumber2(0)
      }}>Set to Zero</button>
      
    </div>
  );
}

export default App;

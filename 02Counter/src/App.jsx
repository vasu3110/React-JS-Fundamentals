import { useState } from 'react'
//useState is a hook
//Hook is a method using which we can propagate change in UI 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //This counter is similar to declaring it using (let counter=10) way but now wherever this variable is used in the html doc it will be updated everywhere at once
  //setcounter method is responsible for updating counter variable 
  //Its not necessary to name the second variable as setcounter it can be anything
  let [counter,setCounter]=useState(10)
  
  const addValue=()=>{
    // counter+=1;
    if(counter<20) setCounter(counter+1);
  }
  const removeValue=()=>{
    if(counter>0) setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button><br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

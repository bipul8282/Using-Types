import React, {useState} from 'react'
import './App.css';

function App() {
  const[val,setVal]=useState(0)
  
  const handleChange=(e)=>{
    setVal(e.target.value)
  }
  return (
    <>
    <div className="App">
      <h1>{val}</h1><br/>
     
      <input className={(val==10?'one':val==20?"two":val==30?"three":val==40?"four":val==50?"five":val==60?"six":val==70?"seven":val==80?"eight":val==90?"nine":"ten")} style={{width:"400px",height:"50px"}} value={val} type='range' min='0' max='100' step='10' onChange={(e)=>handleChange(e)}/>
      {/* <button class="animate-button">Click me</button> */}
      <input type='text'/>
      <input type='password'/>
      <input type='number'/>
      <input type='checkbox'/>
      <input type='color'/>
      <input type='date'/>
      <input type='time'/>
      <input type='search'/>
      <input type='file'/>
      <input type='submit'/>
    </div>
   
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function App() {
  const [name, setName] = useState("")
  const [color, setColor] = useState("")
  const [programmingLang, setProgrammingLang] = useState("")
  
  const register = (e) => {
      e.preventDefault()
      const name = e.target.username.value
      const color = e.target.color.value

      alert(`name : ${name}, color : ${color}`)
  }

  return (
    <div className="App">

      <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}></input>
      <Button onClick={() => alert(name)}>submit name</Button>

      <br/><br/>

      <input type="color" onChange={e => setColor(e.target.value)}></input>
      <Button onClick={() => alert(color)}>submit color</Button>

      <br/><br/>

      <select onChange={e => setProgrammingLang(e.target.value)}>
        <option value="jsx">JSx</option>
        <option value="c">C</option>
        <option value="python">python</option>
        <option value="go">Go</option>
        <option value="kotlin">Kotlin</option>
        <option value="java">Java</option>
      </select>
      <Button onClick={() => alert(programmingLang)}>choose your programming lang</Button>

      <br/><br/>

      <Button onClick={() => {alert(`name : ${name}, color : ${color}, pl : ${programmingLang}`)}}>register</Button>


      <hr/>
      <h2>Using tag FORM</h2>

      <form onSubmit={register}>
        <label for="username">name : </label>
        <input type="text" name="username"></input>
        <br/>
        <label for="color">color : </label>
        <input type="color" name="color"></input>
        <br/>
        <Button type="submit">register</Button>
      </form>
    </div>
  );
}

export default App;

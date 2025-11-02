import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const MAX_LIMIT = 20
  const MIN_LIMIT = 0

  // let counter = 15;

  const addValue = () => {
    if(counter < 20) {
      // setCounter(counter + 1)
      setCounter(prevCounter =>  prevCounter + 1)
      setCounter(prevCounter =>  prevCounter + 1)
      setCounter(prevCounter =>  prevCounter + 1)
      setCounter(prevCounter =>  prevCounter + 1)
    }
    else {
      alert(`Maximum limit of ${MAX_LIMIT} reached!`)
    }
  }

  const removeValure = () => {
    if(counter > 0) {
      // setCounter(counter - 1);
      setCounter(prevCounter => prevCounter - 1);
      setCounter(prevCounter => prevCounter - 1);
    }
    else {
      alert(`Minimum limit of ${MIN_LIMIT} reached!`)
    }
  }

  return (
    <>
      <h2>Chai Aur react</h2>
      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br /> <br />
      <button
      onClick={removeValure}
      >Remove Value {counter}</button>
    </>
  )
}

export default App

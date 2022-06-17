import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { invoke } from '@tauri-apps/api'

function App() {
  const [count, setCount] = useState(0)

  const say_hello = (name: String) => {
    invoke('greet', {name: name})
        .then((res) => console.log(res));
  }

  return (
    <div className="App">
      <button onClick={() => say_hello('test')}>test</button>
    </div>
  )
}

export default App

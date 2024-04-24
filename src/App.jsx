import { useState } from 'react'
import './App.css'
import TodoList from './assets/components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TodoList/>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Admin from './pages/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Admin/>
    </div>
  )
}

export default App

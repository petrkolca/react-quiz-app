import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles/>
      <div className="main">
        <h1>Quiztopia App</h1>
      </div>
    </>
  )
}

export default App

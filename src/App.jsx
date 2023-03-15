import { useContext, useState } from 'react'
import { AppContext } from './store/app-context'
import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  const ctx = useContext(AppContext);
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles/>
      <main>
        <h1>Quiztopia App</h1>
      </main>
    </>
  )
}

export default App

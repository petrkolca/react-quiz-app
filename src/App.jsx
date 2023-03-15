import { useContext, useState } from 'react'
import { AppContext } from './store/app-context'
import SetupForm from './components/SetupForm';
import Preloader from './components/Preloader';

import { GlobalStyles } from './components/styles/GlobalStyles'


function App() {
  const {
    isWaiting,
    loading,
    questions,
    index,
    correctAnswer,
    error,
    isModalOpen} = useContext(AppContext);
  const [count, setCount] = useState(0);

  if (isWaiting) {
    return <SetupForm />
  } 

  if (loading) {
    console.log(questions);
    return (
      <Preloader />
    )
  } 

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

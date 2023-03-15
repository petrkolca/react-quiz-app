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

  let content = <h1>Quiztopia App</h1>;

  if (isWaiting) {
    content = <SetupForm />
  } 

  if (loading) {
    // console.log('data: ', questions);
    content = <Preloader />
  } 

  return (
    <>
      <GlobalStyles/>
      <main>
        {content}
      </main>
    </>
  )
}

export default App

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
    content = <Preloader />
  } 

  // console.log('data: ', questions);
  const [question, incorrect_answers, correct_answer] = questions[0];
  const answers = [...incorrect_answers, correct_answer];
  
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

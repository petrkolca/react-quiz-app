import { Fragment, useContext, useState } from 'react'
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

  let content;

  if (isWaiting) {
    content = <SetupForm />;
  } 

  if (loading) {
    content = <Preloader />;
  } 

  if (questions.length === 0) return;
  console.log(questions);
  const {question, incorrect_answers, correct_answer} = questions[0];
  const answers = [...incorrect_answers, correct_answer];

  content = (
    <section className="quiz">
      <p className="correct-answers">
        correct answer : {correctAnswer}/{index}
      </p>
      <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} />
      </article>
    </section>
  );

  return (
    <Fragment>
      <GlobalStyles/>
      <main>
        {content}
      </main>
    </Fragment>
  )
}

export default App

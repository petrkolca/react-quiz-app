import { Fragment, useContext, useState } from 'react'
import { AppContext } from './store/app-context'
import SetupForm from './components/SetupForm';
import Preloader from './components/Preloader';
import Modal from './components/Modal';

import { GlobalStyles } from './components/styles/GlobalStyles'


function App() {
  const {
    isWaiting,
    loading,
    questions,
    index,
    correctAnswer,
    error,
    isModalOpen,
    nextQuestion,
    checkAnswer,
    closeModal} = useContext(AppContext);
  const [count, setCount] = useState(0);

  // console.log("isWaiting: ", isWaiting);
  // console.log("loading: ", loading);

  let content;

  if (isWaiting) {
    content = <SetupForm />;
  } 

  if (loading) {
    content = <Preloader />;
  } 

  
  if(!isWaiting && !loading) {
    
    if (questions.length === 0) return;
    // console.log(questions);
    const {question, incorrect_answers, correct_answer} = questions[index];
    // const answers = [...incorrect_answers, correct_answer];

    // generating random answers array with correct_answer in random spot
    let answers = [...incorrect_answers];
    const random_numb = Math.floor(Math.random() * 4);
    if (random_numb === 3) {
      // if last index then insert to the end of array
      answers.push(correct_answer)
    } else {
      // insert a random incorrect answer at the random index into the answers array
      answers.push(answers[random_numb]);
      // replacing the random answer at the random index with the correct_answer. 
      answers[random_numb] = correct_answer;
    }

    content = (
      <section className="quiz">
        <p className="correct-answers">
          correct answer : {correctAnswer}/{questions.length - (questions.length - index) === 0 ? questions.length : questions.length - (questions.length - index)}
        </p>
        <article className="container">
            <h2 dangerouslySetInnerHTML={{__html: question}} />
            <div className="btn-ctn">
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index} 
                    className="answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{__html: answer}} />
                )
              })}
            </div>
        </article>
        <button className="next-question" onClick={() => nextQuestion()}>Next Question</button>
      </section>
    );
  }

  return (
    <Fragment>
      <GlobalStyles/>
      <Modal />
      <main>
        {content}
      </main>
    </Fragment>
  )
}

export default App

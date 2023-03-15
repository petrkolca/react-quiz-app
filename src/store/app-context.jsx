import React, { useState } from "react";

// temporary QUIZ API for app build
const TEMP_API_URL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";


const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider value={{
      isWaiting,
      loading,
      questions,
      index,
      correctAnswer,
      error,
      isModalOpen
    }}>{props.children}</AppContext.Provider>
  )
}

export {AppContext, AppProvider};
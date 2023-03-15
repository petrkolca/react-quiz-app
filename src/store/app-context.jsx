import React, { useState, useEffect, useCallback } from "react";

// temporary QUIZ API for app build
const TEMP_API_URL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
const API_URL = "https://opentdb.com/api.php?amount=50";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = useCallback(async (API_URL) => {
    try {
      setLoading(true);
      setIsWaiting(false);

      const response = await fetch(API_URL);

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
  
      const fetchedData = await response.json();
      const data = fetchedData.results;
      // console.log('data pk: ', data);

      if (data.length > 0) {
        
        // set questions array
        setQuestions(data);
        setLoading(false);
        setError(false);
      }

    } catch (error) {

      setIsWaiting(true);
      setError(error.message);
    }


  }, [])

  useEffect(() => {
    fetchQuestions(TEMP_API_URL);
    console.log('useEffect function init');
  
  }, [fetchQuestions]);

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
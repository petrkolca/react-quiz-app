import React from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  return (
    <AppContext.Provider value='quiz-data'>{props.children}</AppContext.Provider>
  )
}

export {AppContext, AppProvider};
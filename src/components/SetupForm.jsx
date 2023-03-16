import React, {useContext} from "react";
import { AppContext } from "../store/app-context";
import { StyledFormCtn } from "./styles/SetupForm.styled";

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useContext(AppContext);

  // console.log('quiz values: ', quiz);

  return (
    <div className="quiz quiz-small">
      <h2>Setup Quiztopia</h2>
      <StyledFormCtn>
        {/* {amount} */}
        <div className="form-control">
          <label htmlFor="amount">Nubmber of questions</label>
          <input 
            name="amount" 
            id="amount"
            className="form-input" 
            type="number"
            placeholder="eg. 10"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50} />
            {error && (
              <p className="error">Can't generate questions, please try different amount</p>
            )}
        </div>
        {/* {Category} */}
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select 
            name="category" 
            id="category"
            className="form-input" 
            placeholder="Pick category"
            value={quiz.category}
            onChange={handleChange}
            >
              <option value="" hidden defaultValue>Pick category</option>
              <option value="Sport">Sport</option>
              <option value="Celebrities">Celebrities</option>
              <option value="Politics">Politics</option>
              <option value="History">History</option>
          </select>
          {error && (
              <p className="error">Can't generate questions, please select different category</p>
          )}
        </div>
        {/* {Difficulty} */}
        <div className="form-control">
          <label htmlFor="difficulty">Difficulty</label>
          <select 
            name="difficulty" 
            id="difficulty"
            className="form-input" 
            placeholder="Pick difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
            >
              <option value="" hidden defaultValue>Pick difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
          </select>
          {error && (
              <p className="error">Can't generate questions, please select different difficulty</p>
          )}
        </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Start</button>
      </StyledFormCtn>
    </div>
  );
}

export default SetupForm;
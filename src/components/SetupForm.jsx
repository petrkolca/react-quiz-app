import React, {useContext} from "react";
import { AppContext } from "../store/app-context";
import { StyledFormCtn } from "./styles/SetupForm.styled";

const SetupForm = () => {
  const {categories, quiz, handleChange, handleSubmit, error} = useContext(AppContext);
  // const category_names_arr = Object.keys(categories);

  // console.log("error: ", error);
  return (
    <div className="quiz quiz-small">
      <h2>Setup Quiztopia</h2>
      <StyledFormCtn>
        {error && (
          <p className="error">Can't generate questions, please try different values</p>
        )}
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
              <p className="error">Entered value must be max 50 amount</p>
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
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
          </select>
          {error && (
              <p className="error">Please select different category</p>
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
              <p className="error">Please select different difficulty</p>
          )}
        </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Start</button>
      </StyledFormCtn>
    </div>
  );
}

export default SetupForm;
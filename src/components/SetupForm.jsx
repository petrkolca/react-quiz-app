import React, {useContext} from "react";
import { AppContext } from "../store/app-context";
import { StyledFormCtn } from "./styles/SetupForm.styled";

const SetupForm = () => {
  const ctx = useContext(AppContext);

  return (
    <StyledFormCtn>
      <h2>Setup Form</h2>
      <form action="">
        <div className="form-control">
          <label htmlFor="number-questions">Nubmber of questions</label>
          <input 
            name="number-questions" 
            id="number-questions"
            className="form-input" 
            type="number"
            placeholder="eg. 10" />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
            <select 
              name="category" 
              id="category"
              className="form-input" 
              placeholder="Pick category">
                <option value="" hidden selected>Pick category</option>
                <option value="1">Sport</option>
                <option value="2">Culture</option>
                <option value="3">Politics</option>
                <option value="4">Economy</option>
            </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">Difficulty</label>
            <select 
              name="difficulty" 
              id="difficulty"
              className="form-input" 
              placeholder="Pick difficulty">
                <option value="" hidden selected>Pick difficulty</option>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
            </select>
        </div>
        <button className="submit-btn" type="submit">Start</button>
      </form>
    </StyledFormCtn>
  );
}

export default SetupForm;
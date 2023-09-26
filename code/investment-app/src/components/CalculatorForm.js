import React, {useState} from 'react'

const initInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  "duration": "",
}
const CalculatorForm = ({onSubmit, resetTable}) => {
  const [userInput, setUserInput] = useState(initInput);
  
  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserInput((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(userInput)
  }

  const resetHandler = () => {
    setUserInput(initInput);
    resetTable([])
  }
  
  
  return (

      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={userInput["current-savings"]} onChange={handleInput} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={userInput["yearly-contribution"]} onChange={handleInput}  id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={userInput["expected-return"]} onChange={handleInput} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={userInput["duration"]} onChange={handleInput} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

    );
}

export default CalculatorForm;

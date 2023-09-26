import React, { useState, useEffect } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Table from "./components/Table";
import CalculatorForm from "./components/CalculatorForm";

const init = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};

function App() {
  const [yearlyData, setYearlyData] = useState(null);
  const [userInput, setUserInput] = useState(null);

  useEffect(() => {
    if (userInput) {
      calculateHandler();
    }
  }, [userInput]);

  const calculateHandler = () => {
    // Should be triggered when form is submitted

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    const data = [];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const datum = {
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      };
      data.push(datum);
    }
    setYearlyData(data);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <CalculatorForm onSubmit={setUserInput} resetTable={setYearlyData} />
      {!userInput && <div>Enter your data and click "Calculate"</div>}
      {userInput && (
        <Table
          yearlyData={yearlyData}
          initInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;

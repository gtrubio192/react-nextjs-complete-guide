import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisibile, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {isFormVisibile ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleCancel}
        />
      ) : (
        <button onClick={() => setIsFormVisible(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

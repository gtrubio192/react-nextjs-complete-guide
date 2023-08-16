import React, {useMemo, useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const handleDropdownFilter = (value) => {
    setFilteredYear(value);
  };

  const filterExpensesByYear = useMemo(() => {
    return props.items.filter((expense) => {
      if (filteredYear === '') {
        return expense;
      }
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }, [props.items, filteredYear]);


  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter onDropdownChange={handleDropdownFilter} selected={filteredYear} />
        {
          filterExpensesByYear.map((expense) => 
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        }
        
      </Card>
    </div>
  );
};

export default Expenses;

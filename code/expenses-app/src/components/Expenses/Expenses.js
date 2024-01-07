import React, { useMemo, useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const handleDropdownFilter = (value) => {
    setFilteredYear(value);
  };

  const filterExpensesByYear = useMemo(() => {
    return props.items.filter((expense) => {
      if (filteredYear === "" || filteredYear === "All") {
        return expense;
      }
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }, [props.items, filteredYear]);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onDropdownChange={handleDropdownFilter}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filterExpensesByYear} />
        <ExpensesList items={filterExpensesByYear} />
      </Card>
    </div>
  );
};

export default Expenses;

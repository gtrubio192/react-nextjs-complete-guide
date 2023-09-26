import React from "react";

const Table = ({ yearlyData = [], initInvestment = 0 }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits:2
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
        {
          yearlyData?.map((year, i) => {
            const totalInterest = formatter.format(year.savingsEndOfYear - initInvestment - year.yearlyContribution*year.year);
            return (
              <tr key={year.year}>
                <td>{year.year}</td>
                <td>{formatter.format(year.savingsEndOfYear)}</td>
                <td>{formatter.format(year.yearlyInterest)}</td>
                <td>{totalInterest}</td>
                <td>{initInvestment + year.yearlyContribution*year.year}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default Table;

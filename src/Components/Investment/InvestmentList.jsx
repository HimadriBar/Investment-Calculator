import React from "react";
import styles from "./InvestmentList.module.css";
const InvestmentList = ({ items, initialInvestment }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <>
      {items && items.length > 0 ? (
        <table className={styles.result}>
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
            {items.map((item) => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.savingsEndOfYear)}</td>
                <td>{formatter.format(item.yearlyInterest)}</td>
                <td>
                  {formatter.format(item.savingsEndOfYear -
                    initialInvestment -
                    item.yearlyContribution * item.year)}
                </td>
                <td>{formatter.format(initialInvestment * item.year)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Record not found"
      )}
    </>
  );
};

export default InvestmentList;

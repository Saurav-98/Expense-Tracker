import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("en-us", { month: "long" })}
      </div>
      <div className="expense-date__day">{props.date.getDate()}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;

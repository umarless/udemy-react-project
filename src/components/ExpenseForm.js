import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  /* stores user entered title to constant inputTitle */
  const titleHandler = (event) => {
    setInputTitle(event.target.value);
  };

  /* stores user entered amount to constant inputAmount */
  const amountHandler = (event) => {
    setInputAmount(event.target.value);
  };

  /* stores user entered date to constant inputDate */
  const dateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpense(userInput);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

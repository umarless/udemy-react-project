import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (saveEvent) => {
    const saveExpenseWithID = {
      ...saveEvent,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(saveExpenseWithID);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
}

export default NewExpense;

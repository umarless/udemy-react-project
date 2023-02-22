import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Dummy Expense 2022", date: new Date("2022, 2, 2"), amount: 240 },
  { id: "e2", title: "Dummy Expense 2021", date: new Date("2021, 3, 3"), amount: 130 },
  { id: "e3", title: "Dummy Expense 2020", date: new Date("2020, 4, 4"), amount: 310 },
  { id: "e4", title: "Dummy Expense 2019", date: new Date("2019, 5, 5"), amount: 105 },
  { id: "e5", title: "Dummy Expense 2022", date: new Date("2022, 6, 6"), amount: 240 },
  { id: "e6", title: "Dummy Expense 2021", date: new Date("2021, 7, 7"), amount: 130 },
  { id: "e7", title: "Dummy Expense 2020", date: new Date("2020, 8, 8"), amount: 310 },
  { id: "e8", title: "Dummy Expense 2019", date: new Date("2019, 9, 9"), amount: 105 }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddNewExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddNewExpense={onAddNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
};

export default App;

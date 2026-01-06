import { useState, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Personal Finance Manager</h1>

      <div className="card">
        <AddExpense addExpense={addExpense} />
      </div>

      <div className="card">
        <Summary expenses={expenses} />
      </div>

      <div className="card">
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;

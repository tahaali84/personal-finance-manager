import { useState } from "react";

function AddExpense({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addExpense({ amount: Number(amount), category });
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button>Add Expense</button>
    </form>
  );
}

export default AddExpense;

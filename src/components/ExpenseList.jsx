function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((e, i) => (
        <li key={i}>
          ₹{e.amount} — {e.category}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

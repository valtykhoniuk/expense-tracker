import { useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <h1>Expense tracker</h1>
      <ExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

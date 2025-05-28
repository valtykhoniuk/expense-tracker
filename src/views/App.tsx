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
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense tracker</h1>
      <ExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

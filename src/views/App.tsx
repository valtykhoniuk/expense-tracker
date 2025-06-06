import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch("http://localhost:3001/expenses");
        const data = await res.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error downloading:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: Expense) => {
    try {
      const res = await fetch("http://localhost:3001/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
      });

      if (!res.ok) throw new Error("Expense wasn't added");

      const saved = await res.json();
      setExpenses((prev) => [saved, ...prev]);
    } catch (error) {
      console.error("Error adding:", error);
    }
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

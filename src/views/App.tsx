import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

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

  const handleDeleteExpense = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3001/expenses/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Expense wasn't deleted");

      setExpenses((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleEditInit = (expense: Expense) => {
    setEditingExpense(expense);
  };

  const handleUpdateExpense = async (updated: Expense) => {
    try {
      const res = await fetch(`http://localhost:3001/expenses/${updated.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error("Failed to uodate");
      const saved = await res.json();
      setExpenses((prev) =>
        prev.map((item) => (item.id === saved.id ? saved : item))
      );
      setEditingExpense(null);
    } catch (error) {
      console.error("Error updating", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense tracker</h1>
      <ExpenseForm
        onAdd={handleAddExpense}
        onUpdate={handleUpdateExpense}
        editingExpense={editingExpense}
      />
      <ExpenseList
        expenses={expenses}
        onDelete={handleDeleteExpense}
        onEdit={handleEditInit}
      />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;

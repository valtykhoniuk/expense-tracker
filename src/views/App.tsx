import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const res = await new Promise<Expense[]>((resolve) =>
          setTimeout(() => {
            resolve([
              {
                id: "1",
                title: "Кава",
                amount: 40,
                category: "food",
                date: "2025-05-26",
              },
              {
                id: "2",
                title: "Проїзд",
                amount: 80,
                category: "transport",
                date: "2025-05-25",
              },
            ]);
          }, 1000)
        );
        setExpenses(res);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: Expense) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setExpenses((prev) => [expense, ...prev]);
    } catch (error) {
      console.error("Error", error);
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

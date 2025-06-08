import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";

interface Props {
  onAdd: (expence: Expense) => void;
  editingExpense?: Expense | null;
  onUpdate: (expense: Expense) => void;
}

const ExpenseForm = ({ onAdd, onUpdate, editingExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount.toString());
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    } else {
      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  }, [editingExpense]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expense: Expense = {
      id: editingExpense ? editingExpense.id : crypto.randomUUID(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };

    if (editingExpense) {
      onUpdate(expense);
    } else {
      onAdd(expense);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        type="text"
        placeholder="Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="block w-full mb-2 p-2 border"
      />
      <input
        type="number"
        placeholder="Sum"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="block w-full mb-2 p-2 border"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full mb-2 p-2 border"
      >
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="block w-full mb-2 p-2 border"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {editingExpense ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import { useState } from "react";
import type { Expense } from "../types/Expense";

interface Props {
  onAdd: (expence: Expense) => void;
}

const ExpenseForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    onAdd(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Sum"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Joyment</option>
        <option value="other">Other</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;

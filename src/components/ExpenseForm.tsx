import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";
import Button from "../UI/Button";
import Select from "../UI/Select";
import Input from "../UI/Input";

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

  const categoryOptions = [
    { value: "food", label: "Food" },
    { value: "transport", label: "Transport" },
    { value: "entertainment", label: "Entertainment" },
    { value: "other", label: "Other" },
  ];

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
      <Input
        type="text"
        placeholder="Name"
        value={title}
        onChange={setTitle}
        required
      />
      <Input
        type="number"
        placeholder="Sum"
        value={amount}
        onChange={setAmount}
        required
      />

      <Select
        value={category}
        onChange={setCategory}
        options={categoryOptions}
      />

      <Input type="date" value={date} onChange={setDate} required />

      <div className="flex justify-center">
        <Button type="submit">{editingExpense ? "Update" : "Add"}</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;

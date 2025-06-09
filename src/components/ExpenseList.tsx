import { useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";
import Select from "../UI/Select";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
  onEdit: (expense: Expense) => void;
}

const ExpenseList = ({ expenses, onDelete, onEdit }: Props) => {
  const [filter, setFilter] = useState<string>("");

  const categoryOptions = [
    { value: "all-categories", label: "All categories" },
    { value: "food", label: "Food" },
    { value: "transport", label: "Transport" },
    { value: "entertainment", label: "Entertainment" },
    { value: "other", label: "Other" },
  ];

  const filteredExpenses =
    filter && filter !== "all-categories"
      ? expenses.filter((expense) => expense.category === filter)
      : expenses;

  return (
    <div className="space-y-2">
      <Select value={filter} onChange={setFilter} options={categoryOptions} />

      {filteredExpenses.length === 0 && (
        <p className="text-center">No expanses :\ </p>
      )}

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ExpenseList;

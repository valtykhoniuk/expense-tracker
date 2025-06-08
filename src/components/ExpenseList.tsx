import { useState } from "react";
import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
  onEdit: (expense: Expense) => void;
}

const ExpenseList = ({ expenses, onDelete, onEdit }: Props) => {
  const [filter, setFilter] = useState<string>("");

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <div className="space-y-2">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="block w-full mb-2 p-2 border"
      >
        <option value="">All categories</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>

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

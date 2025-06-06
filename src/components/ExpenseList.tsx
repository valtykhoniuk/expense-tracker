import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="space-y-2">
      {expenses.length === 0 && <p className="text-center">No expanses :\ </p>}
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;

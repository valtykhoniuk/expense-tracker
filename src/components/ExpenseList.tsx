import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <div className="space-y-2">
      {expenses.length === 0 && <p className="text-center">No expanses :\ </p>}
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;

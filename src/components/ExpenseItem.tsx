import type { Expense } from "../types/Expense";

interface Props {
  expense: Expense;
}

const ExpenseItem = ({ expense }: Props) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <div className="font-semibold">{expense.title}</div>
        <div className="text-sm text-gray-500">
          {expense.category} | {new Date(expense.date).toLocaleDateString()}
        </div>
      </div>
      <div className="text-right font-bold text-red-600">
        - {expense.amount.toFixed(2)} ₴
      </div>
    </div>
  );
};

export default ExpenseItem;

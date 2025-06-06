import type { Expense } from "../types/Expense";

interface Props {
  expense: Expense;
  onDelete: (id: string) => void;
}

const ExpenseItem = ({ expense, onDelete }: Props) => {
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
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={() => onDelete(expense.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;

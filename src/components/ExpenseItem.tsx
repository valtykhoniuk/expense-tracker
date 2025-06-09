import type { Expense } from "../types/Expense";
import Button from "../UI/Button";

interface Props {
  expense: Expense;
  onDelete: (id: string) => void;
  onEdit: (expense: Expense) => void;
}

const ExpenseItem = ({ expense, onDelete, onEdit }: Props) => {
  return (
    <div className="flex justify-between items-center p-2 border-b gap-2">
      <div className="flex-1">
        <div className="font-semibold">{expense.title}</div>
        <div className="text-sm text-gray-500">
          {expense.category} | {new Date(expense.date).toLocaleDateString()}
        </div>
      </div>
      <div className="text-right font-bold text-red-600">
        - {expense.amount.toFixed(2)} ₴
      </div>

      <div className="flex flex-row gap-3 pl-4">
        <Button onClick={() => onDelete(expense.id)}>Delete</Button>
        <Button onClick={() => onEdit(expense)}>Edit</Button>
      </div>
    </div>
  );
};

export default ExpenseItem;

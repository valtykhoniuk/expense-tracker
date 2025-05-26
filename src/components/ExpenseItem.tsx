import type { Expense } from "../types/Expense";

interface Props {
  expense: Expense;
}

const ExpenseItem = ({ expense }: Props) => {
  return (
    <div>
      <div>
        <div>{expense.title}</div>
        <div>
          {expense.category} | {new Date(expense.date).toLocaleDateString()}
        </div>
      </div>
      <div>- {expense.amount.toFixed(2)} ₴</div>
    </div>
  );
};

export default ExpenseItem;

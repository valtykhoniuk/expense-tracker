import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <div>
      {expenses.length === 0 && <p>No expanses :\ </p>}
      <div>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;

import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import type { Expense } from "../types/Expense";

Chart.register(ArcElement, Tooltip, Legend);

interface Props {
  expenses: Expense[];
}

const ExpenseChart = ({ expenses }: Props) => {
  const categorySums: Record<string, number> = {};
  expenses.forEach((expense) => {
    categorySums[expense.category] =
      (categorySums[expense.category] || 0) + expense.amount;
  });

  const data = {
    labels: Object.keys(categorySums),
    datasets: [
      {
        data: Object.values(categorySums),
        backgroundColor: [
          "#f87171", // red
          "#60a5fa", // blue
          "#34d399", // green
          "#facc15", // yellow
          "#a78bfa", // purple
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Expenses by category
      </h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;

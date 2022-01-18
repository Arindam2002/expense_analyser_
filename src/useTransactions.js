import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./Constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce(
    (accumulator, currval) => (accumulator += currval.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    labels: filteredCategories.map((c) => c.type),
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
        hoverOffset: 2
      },
    ],
  };
  console.log(filteredCategories.map((c) => c.type));

  return { filteredCategories, total, chartData };
};

export default useTransactions;

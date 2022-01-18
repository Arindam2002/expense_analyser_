import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import { Chart, ArcElement } from "chart.js";

import useStyles from "./styles";

Chart.register(ArcElement);
function AnalysisCard({ title }) {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  // console.log({ chartData });

  return (
    <div>
      <Card
        className={
          title === "Income"
            ? classes.incomeCard
            : title === "Expense"
            ? classes.expenseCard
            : classes.summaryCard
        }
      >
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut
            data={chartData}
            options={{
              responsive: false,
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default AnalysisCard;

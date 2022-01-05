import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Donught } from "react-chartjs-2";

import useStyles from "./styles";

function AnalysisCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className= {props.title === "Income Analysis" ? classes.incomeCard : (props.title==="Expenditure Analysis" ? classes.expenseCard : classes.summaryCard)}>
        <CardHeader title={props.title} />
        <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Donught data="DATA" /> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default AnalysisCard;

import { makeStyles } from "@material-ui/core";
import { cardProperties } from "../../Constants/constantProperties";


export default makeStyles(() => ({
  incomeCard: {
    borderTop: "5px solid rgba(0, 201, 0, 0.5)",
    ...cardProperties
  },
  expenseCard: {
    borderTop: "5px solid rgba(255, 0, 0, 0.5)",
    ...cardProperties
  },
  summaryCard: {
    borderTop: "5px solid rgba(0, 30, 201, 0.5)",
    ...cardProperties
  },
}));

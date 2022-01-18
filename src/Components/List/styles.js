import { makeStyles } from "@material-ui/core";
import { cardProperties } from "../../Constants/constantProperties";

export default makeStyles(() => ({
  avatarIncome: {
    color: "#FFFFFF",
    backgroundColor: "rgba(0, 201, 0, 0.8)",
  },
  avatarExpense: {
    color: "#FFFFFF",
    backgroundColor: "rgba(255, 0, 0, 0.8)",
  },
  listText: {
    "& span": {
      fontSize: "1rem",
    },
    "& p": {
      fontSize: "0.75rem",
    },
  },
  transactionCard: {
    ...cardProperties,
    marginBottom: "10px",
  },
  iconStyle: {
    color: "rgba(109, 125, 139, 0.8)",
  },
  // list: {
  //   maxHeight: '80vh',
  //   overflow: 'auto',
    // scrollBehavior:
  // },
}));

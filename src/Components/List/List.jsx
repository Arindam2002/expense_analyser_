import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Slide,
  Card,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderCardTransaction from "../HeaderCard/HeaderCardTransaction";

import { ExpenseTrackerContext } from "../../Context/context";
import useStyles from "./styles";

function List() {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <div className="containerPadding">
      <HeaderCardTransaction />
      <MUIList dense={true} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <Card className={classes.transactionCard}>
              <ListItem
                secondaryAction={
                  <IconButton
                    className={classes.iconStyle}
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <PaidIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={`$${transaction.amount} | ${transaction.date}`}
                  className={classes.listText}
                />
              </ListItem>
            </Card>
          </Slide>
        ))}
      </MUIList>
    </div>
  );
}

export default List;

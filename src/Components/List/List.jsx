import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from "@mui/material";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import DeleteIcon from "@mui/icons-material/Delete";

// import useStyles from "./styles";

function List() {
  // const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: "50",
      date: "Wed Jan 05 2022"
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: "50",
      date: "Thu Jan 06 2022"
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: "150",
      date: "Fri Jan 07 2022"
    }
  ];

  return (
    <MUIList dense={true} /*className={classes.list}*/>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <MoneyOffIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary="Secondary text"
            />
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;

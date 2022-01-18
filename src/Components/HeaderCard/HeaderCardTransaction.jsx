import React from "react";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import useStyles from "./styles";

function HeaderCard() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.headerCardStyle}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{bgcolor:"rgba(25, 118, 210, 0.1)", height:48, width:48}}>
              <ReceiptLongIcon className={classes.headerIcons} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.headingStylesss}
            primary="Previous Transactions"
          />
        </ListItem>
      </List>
    </div>
  );
}

export default HeaderCard;

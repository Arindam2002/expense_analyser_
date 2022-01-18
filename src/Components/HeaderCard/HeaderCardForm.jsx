import React from "react";
// import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import useStyles from "./styles";

function HeaderCard(props) {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.headerCardStyle}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{bgcolor:"rgba(25, 118, 210, 0.1)", height:48, width:48}}>
              <AccountBalanceWalletIcon className={classes.headerIcons} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.headingStylesss}
            primary="Balance"
            secondary="$100"
          />
        </ListItem>
      </List>
    </div>
  );
}

export default HeaderCard;

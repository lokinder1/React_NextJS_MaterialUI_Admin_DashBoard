import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import ChangePassword from "./ChangePassword";
import UserDetails from "./UserDetails";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  pic: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    marginBottom: -theme.spacing(8),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  about: {
    padding: theme.spacing(3),
  },
}));

export default function AdminAccount() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={12} md={12} className={classes.pic}>
        <Avatar
          alt="Lokender Singh"
          src="/static/images/avatar/1.jpg"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={12} md={11} className={classes.about}>
        <Paper elevation={3} className={classes.about}>
          Perfection is achieved not when there is nothing more to add, but
          rather when there is nothing more to take away.”
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper elevation={3} className={classes.chart}>
          <ChangePassword />
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} className={classes.chart}>
        <Paper elevation={3}>
          <UserDetails />
        </Paper>
      </Grid>
    </Grid>
  );
}

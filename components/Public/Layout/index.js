import { CssBaseline, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "overflow-x": "hidden",
  },

  content: {
    // height: "100vh",
  },
}));
export default function PublicLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <main className={classes.content}>{props.children}</main>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

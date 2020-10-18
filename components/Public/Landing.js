import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    "overflow-x": "hidden",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    // margin: theme.spacing(4, 0, 2),
  },
  list: {
    margin: theme.spacing(4, 0, 2),
    padding: theme.spacing(2),
    // textAlign: "center",
    // justifyContent: "center"
  },

  midText: {
    margin: theme.spacing(-2, 0, 2),
    padding: theme.spacing(2),
    // textAlign: "center",
    // justifyContent: "center"
  },

  hero: {
    height: "750px",
    // backgroundSize: "contain",
    justifyContent: "center",
    backgroundImage: "url(/images/Lokender-Singh-Portfolio.png)",
    backgroundRepeat: " no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.hero}></div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={11} md={11}>
          <Paper elevation={3} className={classes.midText}>
            <Typography align="center" variant="h4">
              Information
              <hr />
            </Typography>
            <Typography variant="h5" className={classes.title}>
              <center>
                Sometimes it pays to stay in bed on Monday, rather than spending
                the rest of the week debugging Monday’s code.
              </center>
              <br /> <br />
              <center>
                Always code as if the guy who ends up maintaining your code will
                be a violent psychopath who knows where you live.
              </center>
              <br /> <br />I believe that sense of humor is truly important in
              personal and professional life, especially for software
              developers. When our jobs are getting a little too serious, we
              like to input a dose of software development humor/inspiration
              into our daily lives. That’s why we compiled this list of best
              programming quotes that you will definitely love.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={10} md={5}>
          <Paper elevation={3} className={classes.list}>
            <Typography variant="h4" className={classes.title}>
              Text only
            </Typography>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={10} md={5}>
          <Paper elevation={3} className={classes.list}>
            <Typography variant="h4" className={classes.title}>
              Text only
            </Typography>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

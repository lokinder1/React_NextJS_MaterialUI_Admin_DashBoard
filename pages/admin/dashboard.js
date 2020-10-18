import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import PostsLineChart from "../../components/Admin/Chart/PostsLineChart";
import PostsRadarChart from "../../components/Admin/Chart/PostsRadarChart";
import AdminDashboard from "../../components/Admin/Layout";



const useStyles = makeStyles((theme) => ({
  chart: {
    // margin: "10px",
  },


}));

export default function DashBoard() {
  const classes = useStyles();
  return (
    <AdminDashboard>
      <Grid
        container
        spacing={5}
      >
        <Grid item xs={12} md={5} >
          <Paper elevation={3} className={classes.chart}>
            <PostsLineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} className={classes.chart}>
          <Paper elevation={3}>
            <PostsRadarChart />
          </Paper>
        </Grid>
      </Grid>
    </AdminDashboard>
  );
}

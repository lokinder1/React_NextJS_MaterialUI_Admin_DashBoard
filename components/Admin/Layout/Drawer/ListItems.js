import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ViewHeadlineTwoToneIcon from "@material-ui/icons/ViewHeadlineTwoTone";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
}));

export function MainListItems() {
  const classes = useStyles();

  return (
    <List>
      <div>
        <ListItem button>
          <Link href="/admin/dashboard">
            <div className={classes.link}>
              <ListItemIcon>
                <DashboardTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </div>
          </Link>
        </ListItem>

        <ListItem button>
          <Link href="/admin/post/create">
            <div className={classes.link}>
              <ListItemIcon>
                <AddBoxTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Create Post" />
            </div>
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/admin/post/list">
            <div className={classes.link}>
              <ListItemIcon>
                <ViewHeadlineTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Show Posts" />
            </div>
          </Link>
        </ListItem>
      </div>
    </List>
  );
}

export function SecondaryListItems() {
  const classes = useStyles();
  return (
    <List>
      <div>
        <ListSubheader inset>Other Links</ListSubheader>
        <ListItem button>
          <Link href="/">
            <div className={classes.link}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Main Website" />
            </div>
          </Link>
        </ListItem>
      </div>
    </List>
  );
}

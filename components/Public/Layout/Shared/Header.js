import Link from "next/link";
import { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    'backgroundColor': theme.palette.primary.main,
    height: '30px',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  linkStyle: {
    padding: '10px',
    "text-decoration": 'none',
    color: theme.palette.primary.light,
    fontSize: '15px',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link href="/">
        <a className={classes.linkStyle}>Home</a>
      </Link>
      <Link href="/auth/signIn">
        <a className={classes.linkStyle}>Login</a>
      </Link>
      <Link href="/auth/signUp">
        <a className={classes.linkStyle}>Register</a>
      </Link>
      <Link href="/admin/dashboard">
        <a className={classes.linkStyle}>Dashboard</a>
      </Link>
    </div>
  );
}

export default Header;

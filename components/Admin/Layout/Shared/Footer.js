import Link from "next/link";
import Typography from "@material-ui/core/Typography";

import React from 'react';
import PersonalFooter from '@bit/lokinder1.footers.personal-footer';


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    height: "30px",
    alignItems: "center",
    color: theme.palette.primary.light,
    justifyContent: "center",
  },

  footerText: {
    color: theme.palette.primary.light,
    "text-decoration": "none",
  },
  footerLink: {
    "text-decoration": "none",
    color: theme.palette.primary.light,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <PersonalFooter/>
    // <div className={classes.footer}>
    //   <Typography
    //     className={classes.footerText}
    //     variant="body2"
    //     color="textSecondary"
    //     align="center"
    //   >
    //     {"Copyright © "}
    //     <a href="http://www.lokender.xyz" target="_blank" className={classes.footerLink}>
    //       {" "}
    //       Lokender Singh
    //     </a>{" "}
    //     {new Date().getFullYear()}
    //     {"."}
    //   </Typography>
    // </div>
  );
}

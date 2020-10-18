import {
    Button,
    Grid,
    IconButton,
    TextField,
    Typography,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/styles";
  import React, { useEffect, useState } from "react";


  const useStyles = makeStyles((theme) => ({
    quote: {
      backgroundColor: theme.palette.neutral,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url(/images/auth.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    quoteInner: {
      textAlign: "center",
      flexBasis: "600px",
    },
    quoteText: {
      color: theme.palette.white,
      fontWeight: 300,
    },
    name: {
        marginTop: theme.spacing(3),
        color: theme.palette.white,
      },
      bio: {
        color: theme.palette.white,
      },
}));  

export default function Quote(){

  const classes = useStyles();
    return(
        <div className={classes.quote}>
        <div className={classes.quoteInner}>
          <Typography className={classes.quoteText} variant="h1">
          Experience is the name everyone gives to their mistakes
          </Typography>
          <div className={classes.person}>
            <Typography className={classes.name} variant="body1">
              Lokender Singh
            </Typography>
            <Typography className={classes.bio} variant="body2">
              Software Developer
            </Typography>
          </div>
        </div>
      </div>
    )
}
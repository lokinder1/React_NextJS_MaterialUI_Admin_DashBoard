import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import PersonalFooter from '@bit/lokinder1.footers.personal-footer';

const useStyles = makeStyles((theme) => ({
  
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <PersonalFooter {...props} />
    );
}

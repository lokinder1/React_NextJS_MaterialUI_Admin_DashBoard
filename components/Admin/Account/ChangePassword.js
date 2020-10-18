import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import validate from "validate.js";

const schema = {
  oldPassword: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  newPassword: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
    padding: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  saveButton: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ChangePassword() {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    Router.push("/");
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <form className={classes.form} onSubmit={handleSave}>
      <Typography className={classes.title} variant="h4">
        Change Password
      </Typography>
      <TextField
        className={classes.textField}
        error={hasError("oldPassword")}
        fullWidth
        helperText={
          hasError("oldPassword") ? formState.errors.oldPassword[0] : null
        }
        label="Old Password"
        name="oldPassword"
        onChange={handleChange}
        type="password"
        value={formState.values.oldPassword || ""}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        error={hasError("newPassword")}
        fullWidth
        helperText={
          hasError("newPassword") ? formState.errors.newPassword[0] : null
        }
        label="New Password"
        name="newPassword"
        onChange={handleChange}
        type="password"
        value={formState.values.newPassword || ""}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        error={hasError("confirmPassword")}
        fullWidth
        helperText={
          hasError("confirmPassword")
            ? formState.errors.confirmPassword[0]
            : null
        }
        label="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        type="password"
        value={formState.values.confirmPassword || ""}
        variant="outlined"
      />

      <Button
        className={classes.saveButton}
        color="primary"
        disabled={!formState.isValid}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        change Password
      </Button>
    </form>
  );
}

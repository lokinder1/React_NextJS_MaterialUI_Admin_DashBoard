import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import validate from "validate.js";

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64,
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

export default function UserDetails() {
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
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
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
        Account Details
      </Typography>
      <TextField
        className={classes.textField}
        error={hasError("firstName")}
        fullWidth
        helperText={
          hasError("firstName") ? formState.errors.firstName[0] : null
        }
        label="First name"
        name="firstName"
        onChange={handleChange}
        type="text"
        value={formState.values.firstName || ""}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        error={hasError("lastName")}
        fullWidth
        helperText={hasError("lastName") ? formState.errors.lastName[0] : null}
        label="Last name"
        name="lastName"
        onChange={handleChange}
        type="text"
        value={formState.values.lastName || ""}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        error={hasError("email")}
        fullWidth
        helperText={hasError("email") ? formState.errors.email[0] : null}
        label="Email address"
        name="email"
        onChange={handleChange}
        type="text"
        value={formState.values.email || ""}
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
        Save Details
      </Button>
    </form>
  );
}

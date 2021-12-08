import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import { signIn } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "10rem auto",
    width: "30%",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const auth= useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth.id) return <Redirect to="/jobs" />;//change

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          name="email"
          label="Enter your email"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          name="password"
          label="Enter your password"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default SignIn;

import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "400px",
    backgroundColor: "#ebecf0",
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
export default function Landing() {
  const classes = useStyle();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/lists";
  }
  return (
    <div>
      <Paper className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            fullWidth
            type="text"
            value={username}
            onInput={(e) => setUsername(e.target.value)}
            name="username"
            margin="normal"
            variant="outlined"
            required
            autoFocus
          />
          <TextField
            id="outlined"
            label="Password"
            fullWidth
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

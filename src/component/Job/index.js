import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { useParams } from "react-router-dom";
import JobChat from "./JobChat/JobChat";
import JobInfo from "./JobInfo/JobInfo";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));
export default function Job() {
  const classes = useStyles();
  const params = useParams();
  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => (window.location.href = "/lists")}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            JOB: Be Happy
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item xs={12} sm={7}>
          <JobChat />
        </Grid>
        <Grid item xs={12} sm={5} padding={0}>
          <JobInfo />
        </Grid>
      </Grid>
    </div>
  );
}

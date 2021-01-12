import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChatContext } from "../../utils/ChatContext";
import { JobContext } from "../../utils/JobContext";
import JobChat from "./JobChat/JobChat";
import JobInfo from "./JobInfo";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  jobInfo: {
    border: "2px solid black",
  },
  disableLink: {
    color: "inherit",
  },
  gridContainer: {
    height: "90vh",
  },
  infoContainer: {
    borderLeft: "1px solid black",
    overflow: "scroll",
  },
  navbar: {
    zIndex: "10vh",
  },
}));
export default function Job() {
  const [jobs, setJobs] = useContext(JobContext);
  const [chats, setChats] = useContext(ChatContext);
  const classes = useStyles();
  const { id } = useParams();

  let jobData = jobs.find((x) => x.id === id);
  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Link className={classes.disableLink} to="/lists">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Link>

          <Typography variant="h6" className={classes.title}>
            JOB: {jobData.jobname}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className={classes.gridContainer} container>
        <Grid item xs={12} sm={7}>
          <JobChat chats={chats} jobId={id} setChats={setChats} />
        </Grid>
        <Grid item xs={12} sm={5} padding={0} className={classes.infoContainer}>
          <JobInfo jobData={jobData} setJobs={setJobs} jobId={id} jobs={jobs} />
        </Grid>
      </Grid>
    </div>
  );
}

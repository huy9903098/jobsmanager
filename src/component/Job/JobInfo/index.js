import { Box, Divider, makeStyles } from "@material-ui/core";
import { React, useState } from "react";
import JobData from "./JobData";

const useStyles = makeStyles((theme) => ({
  pictureContainer: {
    height: "150px",
    overflow: "scroll",
    padding: theme.spacing(2),
  },
  taskContainer: {
    overflow: "scroll",
    padding: theme.spacing(2),
  },
}));

export default function JobInfo({ jobData, setJobs, jobId }) {
  // const [editStatus, setTitleStatus] = useState(false);
  // const [editInfo, setTitleInfo] = useState(false);
  const [jobInfoData, setJobInfoData] = useState(jobData);
  const classes = useStyles();
  return (
    <div>
      <JobData
        setJobs={setJobs}
        jobId={jobId}
        jobInfoData={jobInfoData}
        setJobInfoData={setJobInfoData}
      />
      <Divider />
      <Box className={classes.pictureContainer}>Photo</Box>
      <Divider />
      <Box className={classes.taskContainer}>Task List</Box>
    </div>
  );
}

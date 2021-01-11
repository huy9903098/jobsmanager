import {
  Box,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { React, useState } from "react";

const useStyles = makeStyles((theme) => ({
  infoBox: {
    display: "inline-block",
    width: "auto",
  },
  infoContainer: {
    height: "250px",
    overflow: "scroll",
    padding: theme.spacing(2),
  },
}));
export default function JobData({
  setJobs,
  jobId,
  jobInfoData,
  setJobInfoData,
}) {
  const [editStatus, setTitleStatus] = useState(false);
  const [editInfo, setTitleInfo] = useState(false);
  const classes = useStyles();
  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setJobInfoData({ ...jobInfoData, [name]: newValue });
  };

  const handleUpdatJobs = () => {
    setJobs((prevJobs) => {
      const jobIndex = prevJobs.findIndex((emp) => emp.id.toString() === jobId);
      return prevJobs.map((obj, index) => {
        return index === jobIndex ? jobInfoData : obj;
      });
    });
  };
  const handleUpdateStatus = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;
    const newJobData = { ...jobInfoData, [name]: newValue };
    setJobInfoData(newJobData);
    setJobs((prevJobs) => {
      const jobIndex = prevJobs.findIndex((emp) => emp.id.toString() === jobId);
      return prevJobs.map((obj, index) => {
        return index === jobIndex ? newJobData : obj;
      });
    });
    setTitleStatus(!editStatus);
  };
  return (
    <Box className={classes.infoContainer}>
      <Box>
        ID: <Typography display="inline">{jobInfoData.id}</Typography>
      </Box>

      {editStatus ? (
        <Box
          onBlur={() => {
            handleUpdatJobs();
          }}
        >
          Status:{" "}
          <Select
            value={jobInfoData.status}
            name="status"
            onChange={(e) => handleUpdateStatus(e)}
          >
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Ongoing"}>Ongoing</MenuItem>
            <MenuItem value={"Closed"}>Closed</MenuItem>
          </Select>
        </Box>
      ) : (
        <Box onClick={() => setTitleStatus(!editStatus)}>
          Status: <Typography display="inline">{jobInfoData.status}</Typography>
        </Box>
      )}

      {editInfo ? (
        <Box
          onBlur={() => {
            handleUpdatJobs();
            setTitleInfo(!editStatus);
          }}
        >
          Info:{" "}
          <InputBase
            name="info"
            multiline
            fullWidth
            onChange={handleInput}
            autoFocus
            value={jobInfoData.info}
            inputProps={{
              className: classes.input,
            }}
          />
        </Box>
      ) : (
        <Box onClick={() => setTitleInfo(!editInfo)}>
          Info: <Typography>{jobInfoData.info}</Typography>
        </Box>
      )}
    </Box>
  );
}

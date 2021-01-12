import {
  Button,
  Collapse,
  fade,
  IconButton,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyle = makeStyles((theme) => ({
  createBtnContainer: {
    textAlign: "right",
    width: "100%",
  },
  createBtn: {
    marginTop: theme.spacing(2),
    background: "#1976d2",
    color: "#fff",
    "&:hover": {
      background: fade("#1976d2", 0.25),
    },
  },
  btnConfirm: {
    background: "#5aac44",
    color: "#fff",
    "&:hover": {
      background: fade("#5aac44", 0.25),
    },
  },
  createBtnDisable: {
    color: "#fff",
    background: fade("#1976d2", 0.25),
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
  createTable: {
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
export default function CreateJob({ user, setJobs }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState({
    id: uuidv4(),
    jobname: null,
    customer: user && user.name ? user.name : null,
    endDate: "2020-01-11",
    startDate: "2020-01-11",
    status: "Pending",
    location: user && user.location ? user.location : null,
  });

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setJob({ ...job, [name]: newValue });
  };
  useEffect(() => {
    if (user && user.location && user.name) {
      setJob({ ...job, location: user.location, customer: user.name });
    } else if (user && user.name) {
      setJob({ ...job, customer: user.name });
    }
  }, [user]);

  const handleCreateJob = (e) => {
    e.preventDefault();
    const convertStartDate = new Date(job.startDate);
    const convertEndDate = new Date(job.endDate);

    if (job.jobname && job.customer && job.location) {
      const jobFinal = {
        id: job.id,
        jobname: job.jobname,
        customer: job.customer,
        endDate: convertEndDate,
        startDate: convertStartDate,
        status: job.status,
        location: job.location,
      };

      setJobs((prevJobs) => [...prevJobs, jobFinal]);
      setJob({
        id: uuidv4(),
        jobname: null,
        customer: user && user.name ? user.name : null,
        endDate: "2020-01-11",
        startDate: "2020-01-11",
        status: "Pending",
        location: user && user.location ? user.location : null,
      });
      setOpen(false);
    }
  };
  return (
    <div className={classes.createBtnContainer}>
      <Collapse in={open}>
        <div>
          <form>
            <TableContainer component={Paper}>
              <TableRow className={classes.createTable}>
                <TableCell component="th" scope="row">
                  <TextField
                    multiline
                    variant="filled"
                    name="jobname"
                    label="Job Name"
                    value={job.jobname}
                    onChange={handleInput}
                    placeholder="Job Name"
                  />
                </TableCell>
                <TableCell align="right">
                  {user && user.name ? (
                    user.name
                  ) : (
                    <TextField
                      multiline
                      variant="filled"
                      name="customer"
                      label="Customer"
                      value={job.customer}
                      onChange={handleInput}
                      placeholder="Customer"
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  {user && user.location ? (
                    user.location
                  ) : (
                    <TextField
                      multiline
                      variant="filled"
                      name="location"
                      label="Location"
                      value={job.location}
                      onChange={handleInput}
                      placeholder="Location"
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="date"
                    name="startDate"
                    label="Start Date"
                    type="date"
                    value={job.startDate}
                    onChange={handleInput}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="date"
                    name="endDate"
                    label="End Date"
                    type="date"
                    onChange={handleInput}
                    value={job.endDate}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Select
                    value={job.status}
                    name="status"
                    onChange={handleInput}
                  >
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    <MenuItem value={"Ongoing"}>Ongoing</MenuItem>
                    <MenuItem value={"Closed"}>Closed</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            </TableContainer>
          </form>
        </div>

        <div className={classes.confirm}>
          <Button className={classes.btnConfirm} onClick={handleCreateJob}>
            Add Job
          </Button>
          <IconButton onClick={() => setOpen(false)}>
            <Clear />
          </IconButton>
        </div>
      </Collapse>
      <Collapse in={!open}>
        {user ? (
          <Button className={classes.createBtn} onClick={() => setOpen(!open)}>
            Create
          </Button>
        ) : (
          <>
            <Button className={classes.createBtnDisable}>Create</Button>
            <p>Select a user to create a job</p>
          </>
        )}
      </Collapse>
    </div>
  );
}

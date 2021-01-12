import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    overflow: "scroll",
    width: 400,
    maxHeight: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  taskBtn: {
    marginTop: theme.spacing(2),
  },
  taskContainer: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
}));

export default function CreateTaskModal({
  formType,
  chat,
  setChats,
  jobs,
  setJobs,
  jobData,
  closeModel,
}) {
  const classes = useStyles();
  const [task, setCreateTask] = useState({
    id: uuidv4,
    name: "",
    createdMessage: {
      id: chat.id,
      message: chat.message,
    },
    dueDate: "2020-01-11",
    assignedMessage: [],
  });

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setCreateTask({ ...task, [name]: newValue });
  };

  const handleCreateTask = () => {
    task.dueDate = new Date(task.dueDate);
    let currentJob = { ...jobData, tasks: [...jobData["tasks"], task] };

    setJobs(() => {
      const jobIndex = jobs.findIndex((emp) => {
        return emp.id.toString() === currentJob.id;
      });
      return jobs.map((obj, index) => {
        return index === jobIndex ? currentJob : obj;
      });
    });
    closeModel();
  };

  const handleAssignTask = (taskChoose) => {
    const taskIndex = jobData.tasks.findIndex((emp) => {
      return emp.id === taskChoose.id;
    });

    let currentJob = jobData;

    if (
      !jobData["tasks"][taskIndex].assignedMessage.find((x) => x.id === chat.id)
    ) {
      currentJob["tasks"][taskIndex].assignedMessage.push({
        id: chat.id,
        message: chat.message,
      });
    }

    setJobs(() => {
      const jobIndex = jobs.findIndex((emp) => {
        return emp.id.toString() === currentJob.id;
      });
      return jobs.map((obj, index) => {
        return index === jobIndex ? currentJob : obj;
      });
    });
    closeModel();
  };
  return (
    <div className={classes.paper}>
      {formType === "create" ? (
        <>
          <h2>Create a task</h2>
          <TextField
            name="name"
            value={task.name}
            label="Type Something"
            fullWidth
            onChange={handleInput}
          />
          <TextField
            name="dueDate"
            label="End Date"
            type="date"
            onChange={handleInput}
            value={task.dueDate}
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleCreateTask}
            className={classes.taskBtn}
          >
            CREATE
          </Button>
        </>
      ) : (
        <>
          <h2>Assign to Task</h2>
          {jobData.tasks &&
            jobData.tasks.map((task) => (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleAssignTask(task)}
                className={classes.taskBtn}
              >
                {task.name}
              </Button>
            ))}
        </>
      )}
    </div>
  );
}

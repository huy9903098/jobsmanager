import { Box, Button, makeStyles, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ShowTaskModal from "./Task/ShowTaskModal";

const useStyles = makeStyles((theme) => ({
  taskContainer: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  taskBtn: {
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function JobTask({ jobInfoData }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskSlected, setTaskSelected] = useState({});
  const closeModel = () => {
    setModalOpen(false);
  };
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Task List
      </Typography>
      <Box>
        {jobInfoData.tasks.length > 0 &&
          jobInfoData.tasks.map((task) => (
            <Box key={task.id} className={classes.taskContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.taskBtn}
                onClick={() => {
                  setTaskSelected(task);
                  setModalOpen(true);
                }}
              >
                {task.name}
              </Button>
            </Box>
          ))}
      </Box>
      <Modal className={classes.modal} open={modalOpen} onClose={closeModel}>
        <ShowTaskModal closeModel={closeModel} task={taskSlected} />
      </Modal>
    </Box>
  );
}

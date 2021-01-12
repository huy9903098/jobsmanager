import { Box, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CreateTaskModal from "../JobInfo/Task/CreateTaskModal";

const useStyles = makeStyles((theme) => ({
  contextMenu: {
    zIndex: 10,
    position: "fixed",
    border: "1px solid black",
    backgroundColor: "white",
  },
  contextMenuItem: {
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "lightblue",
      cursor: "pointer",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const ContextMenu = ({ parentRef, chat, setChats, jobs, setJobs, jobData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [formType, setFormType] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const closeModel = () => {
    setModalOpen(false);
  };
  const menuItems = [
    {
      type: "create",
      text: "Create task",
    },
    { type: "assign", text: "Assign to task" },
  ];

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) {
      return;
    }

    const showMenu = (event) => {
      event.preventDefault();

      setVisibility(true);
      setX(event.clientX);
      setY(event.clientY);
    };

    const closeMenu = () => {
      setVisibility(false);
    };

    parent.addEventListener("contextmenu", showMenu);
    window.addEventListener("click", closeMenu);

    return function cleanup() {
      parent.removeEventListener("contextmenu", showMenu);
      window.removeEventListener("click", closeMenu);
    };
  });

  const style = {
    top: y,
    left: x,
  };

  return (
    <Box>
      {isVisible ? (
        <>
          <div className={classes.contextMenu} style={style}>
            {menuItems.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setModalOpen(true);
                    setFormType(item.type);
                  }}
                  className={classes.contextMenuItem}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
      <Modal className={classes.modal} open={modalOpen} onClose={closeModel}>
        <CreateTaskModal
          closeModel={closeModel}
          formType={formType}
          chat={chat}
          jobs={jobs}
          jobData={jobData}
          setJobs={setJobs}
          setChats={setChats}
        />
      </Modal>
    </Box>
  );
};

export default ContextMenu;

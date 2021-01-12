import {
  Divider,
  fade,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    maxHeight: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  root: {
    padding: 0,
  },
  taskCreatedMessage: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      background: fade("#000000", 0.8),
    },
  },
  createdView: {
    color: "white",
  },
  date: {
    padding: 0,
  },
}));

export default function ShowTaskModal({ task }) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <List component="nav" className={classes.root}>
        <ListItem className={classes.taskCreatedMessage} button>
          <ListItemText inset primary={task.createdMessage.message} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="view">
              <VisibilityIcon className={classes.createdView} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        {task.assignedMessage.map((item) => {
          return (
            <>
              <ListItem button>
                <ListItemText inset primary={item.message} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="view">
                    <VisibilityIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
      <List component="nav" className={classes.date}>
        <ListItem button>
          Due Date:{" "}
          <ListItemText inset primary={task.dueDate.toLocaleDateString()} />
        </ListItem>
      </List>
    </div>
  );
}

import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React, { useRef } from "react";
import ContextMenu from "./ContextMenu";

const useStyles = makeStyles({
  messageItem: {
    cursor: "pointer",
  },
});

export default function ChatItem({ chat, setChats, jobs, setJobs, jobData }) {
  const containerRef = useRef(null);
  const classes = useStyles();
  return (
    <ListItem ref={containerRef} key={chat.id}>
      <Grid container>
        <Grid item xs={12}>
          <ContextMenu
            parentRef={containerRef}
            chat={chat}
            jobs={jobs}
            jobData={jobData}
            setJobs={setJobs}
            setChats={setChats}
          />
          <ListItemText
            className={classes.messageItem}
            align={chat.userId === "admin" ? "right" : "left"}
            primary={chat.message}
          ></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText
            align={chat.userId === "admin" ? "right" : "left"}
            secondary={chat.date.toLocaleDateString()}
          ></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
}

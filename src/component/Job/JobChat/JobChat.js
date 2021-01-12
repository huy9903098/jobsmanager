import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "92vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "75vh",
    overflowY: "auto",
  },
  messageItem: {
    cursor: "pointer",
  },
});

export default function JobChat({ chats, jobId, setChats }) {
  const classes = useStyles();
  const [messages, setMessages] = useState({
    id: uuidv4(),
    message: "",
    date: new Date(),
    userId: "admin",
  });
  const messagesEndRef = useRef(null);

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setMessages({ ...messages, [name]: newValue });
  };
  const sendChat = () => {
    setChats((prevChats) => {
      const chatObject = prevChats.hasOwnProperty(jobId)
        ? prevChats[jobId]
        : [];
      return { ...prevChats, [jobId]: [...chatObject, messages] };
    });
    setMessages({
      id: uuidv4(),
      message: "",
      date: new Date(),
      userId: "admin",
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Paper container component={Paper} className={classes.chatSection}>
      <div>
        <List className={classes.messageArea}>
          {chats[jobId] &&
            chats[jobId].map((chat) => (
              <ListItem key={chat.id}>
                <Grid container>
                  <Grid item xs={12}>
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
            ))}
          <div ref={messagesEndRef} />
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid xs={2} align="left">
            <Fab color="primary" aria-label="add">
              <CameraAltIcon />
            </Fab>
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              name="message"
              value={messages.message}
              onChange={handleInput}
              fullWidth
            />
          </Grid>
          <Grid xs={1} align="right" onClick={sendChat}>
            <Fab color="primary" aria-label="add">
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

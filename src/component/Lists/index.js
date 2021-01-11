import { Button, Container, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../../utils/CustomerContext";
import { JobContext } from "../../utils/JobContext";
import { UserContext } from "../../utils/UserContext";
import CreateJob from "./CreateJob";
import TableCustom from "./Table";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  tabBtn: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: "#4791db",
    color: "white",
  },
  tabBtnSelected: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: "#115293",
    color: "white",
  },
  createBtnContainer: {
    textAlign: "right",
    width: "100%",
  },
  createBtn: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
  },
  tableContainer: {
    maxHeight: 440,
  },
}));

export default function Lists() {
  const [jobs, setJobs] = useContext(JobContext);
  const customers = useContext(CustomerContext);
  const users = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userIdCreateJob, setUserIdCreateJob] = useState({
    id: null,
    type: "",
  });
  const [tableValue, setTableValue] = useState(jobs);
  const [tab, setTab] = useState("jobs");
  const classes = useStyle();
  useEffect(() => {
    if (userIdCreateJob.type === "users") {
      setSelectedUser(users[0].find((x) => x.id === userIdCreateJob.id));
    } else if (userIdCreateJob.type === "customers") {
      setSelectedUser(customers[0].find((x) => x.id === userIdCreateJob.id));
    }
  }, [customers, userIdCreateJob, users]);
  useEffect(() => {
    switch (tab) {
      case "jobs":
        setTableValue(jobs);
        break;
      case "customers":
        setTableValue(customers[0]);
        break;
      case "users":
        setTableValue(users[0]);
        break;
      default:
        setTableValue(jobs);
    }
  }, [customers, jobs, tab, users]);
  return (
    <Container className={classes.container}>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={tab === "jobs" ? classes.tabBtnSelected : classes.tabBtn}
          onClick={() => {
            setTab("jobs");
            setTableValue(jobs);
          }}
        >
          Jobs
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={tab === "users" ? classes.tabBtnSelected : classes.tabBtn}
          onClick={() => {
            setTab("users");
            setTableValue(users[0]);
          }}
        >
          Users
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={
            tab === "customers" ? classes.tabBtnSelected : classes.tabBtn
          }
          onClick={() => {
            setTab("customers");
            setTableValue(customers[0]);
          }}
        >
          Customers
        </Button>
      </div>
      <TableCustom
        tab={tab}
        value={tableValue}
        setUserIdCreateJob={setUserIdCreateJob}
        userIdCreateJob={userIdCreateJob}
      />
      <CreateJob setJobs={setJobs} user={selectedUser} />
    </Container>
  );
}

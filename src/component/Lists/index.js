import { Button, Container, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { CustomerContext } from "../../utils/CustomerContext";
import { JobContext } from "../../utils/JobContext";
import { UserContext } from "../../utils/UserContext";
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
  const [userCreateJob, setUserCreateJob] = useState({
    name: null,
    id: null,
  });
  const [tableValue, setTableValue] = useState(jobs);
  const [tab, setTab] = useState("jobs");
  const classes = useStyle();
  const handleCreateJob = () => {};
  const handleSetTab = (tab) => {
    setTab(tab);
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
  };
  return (
    <Container className={classes.container}>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={tab === "jobs" ? classes.tabBtnSelected : classes.tabBtn}
          onClick={() => handleSetTab("jobs")}
        >
          Jobs
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={tab === "users" ? classes.tabBtnSelected : classes.tabBtn}
          onClick={() => handleSetTab("users")}
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
          onClick={() => handleSetTab("customers")}
        >
          Customers
        </Button>
      </div>
      <TableCustom tab={tab} value={tableValue} />

      <div className={classes.createBtnContainer}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.createBtn}
          onClick={handleCreateJob}
        >
          Create
        </Button>
      </div>
    </Container>
  );
}

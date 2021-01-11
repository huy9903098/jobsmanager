import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import TableCustom from "./Table/TableCustom";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  tabBtn: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
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

export default function Home() {
  const classes = useStyle();
  const handleCreateJob = () => {
    console.log("rows");
  };
  return (
    <Container className={classes.container}>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.tabBtn}
        >
          Jobs
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.tabBtn}
        >
          Users
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.tabBtn}
        >
          Customers
        </Button>
      </div>

      <TableCustom />

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

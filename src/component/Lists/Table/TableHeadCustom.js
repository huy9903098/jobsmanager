import {
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
const jobCells = [
  { id: "jobname", numeric: false, label: "JOB NAME" },
  { id: "id", numeric: true, label: "JOB ID" },
  { id: "customer", numeric: true, label: "CUSTOMER" },
  { id: "location", numeric: true, label: "LOCATION" },
  {
    id: "startDate",
    numeric: true,

    label: "DATE START",
  },
  { id: "endDate", numeric: true, label: "DATE END" },
  { id: "status", numeric: true, label: "STATUS" },
];

const customerCells = [
  {
    id: "name",
    numeric: false,
    label: "CUSTOMER NAME",
  },
  { id: "id", numeric: true, label: "CUSTOMER ID" },
  { id: "location", numeric: true, label: "LOCATION" },
];

const userCells = [
  { id: "name", numeric: false, label: "NAME" },
  { id: "id", numeric: true, label: "USER ID" },
];

export default function TableHeadCustom(props) {
  const { order, orderBy, onRequestSort, tab } = props;
  const [headers, setHeaders] = useState(jobCells);
  const classes = useStyle();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  useEffect(() => {
    switch (tab) {
      case "jobs":
        setHeaders(jobCells);
        break;
      case "customers":
        setHeaders(customerCells);
        break;
      case "users":
        setHeaders(userCells);
        break;
      default:
        setHeaders(jobCells);
    }
  }, [tab]);

  return (
    <TableHead>
      <TableRow>
        {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

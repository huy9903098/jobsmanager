import {
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React from "react";

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
const headCells = [
  { id: "jobname", numeric: false, disablePadding: true, label: "JOB ID" },
  { id: "jobid", numeric: true, disablePadding: true, label: "JOB ID" },
  { id: "customer", numeric: true, disablePadding: false, label: "CUSTOMER" },
  { id: "location", numeric: true, disablePadding: false, label: "LOCATION" },
  {
    id: "startDate",
    numeric: true,
    disablePadding: false,
    label: "DATE START",
  },
  { id: "endDate", numeric: true, disablePadding: false, label: "DATE END" },
  { id: "status", numeric: true, disablePadding: false, label: "STATUS" },
];
export default function TableHeadCustom(props) {
  const { order, orderBy, onRequestSort } = props;
  const classes = useStyle();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
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

import { makeStyles, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const useStyle = makeStyles((theme) => ({
  chosenName: {
    backgroundColor: "#808B96",
    cursor: "pointer",
  },
  chooseName: {
    cursor: "pointer",
  },
}));

export default function TableBodyCustom(props) {
  const {
    order,
    orderBy,
    rows,
    tab,
    setUserIdCreateJob,
    userIdCreateJob,
  } = props;
  const classes = useStyle();
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
        if (tab === "customers") {
          return (
            <TableRow
              className={
                userIdCreateJob.type === tab && userIdCreateJob.id === row.id
                  ? classes.chosenName
                  : classes.chooseName
              }
              onClick={() =>
                setUserIdCreateJob({ id: row.id, type: "customers" })
              }
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
            </TableRow>
          );
        } else if (tab === "users") {
          return (
            <TableRow
              className={
                userIdCreateJob.type === tab && userIdCreateJob.id === row.id
                  ? classes.chosenName
                  : classes.chooseName
              }
              onClick={() => setUserIdCreateJob({ id: row.id, type: "users" })}
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
            </TableRow>
          );
        } else {
          const startDateConvert = row.startDate.toLocaleDateString();
          const endDateConvert = row.endDate.toLocaleDateString();

          return (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Link to={`/job/${row.id}`}>{row.jobname}</Link>
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{startDateConvert}</TableCell>
              <TableCell align="right">{endDateConvert}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          );
        }
      })}
    </TableBody>
  );
}

import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function createData(
  jobname,
  jobid,
  customer,
  location,
  startDate,
  endDate,
  status
) {
  return { jobname, jobid, customer, location, startDate, endDate, status };
}
const rows = [
  createData(
    "Frozen yoghurt",
    1,
    "xxaa123",
    "New york",
    new Date(1992, 1, 1),
    new Date(2002, 1, 1),
    "pending"
  ),
  createData(
    "Ice cream sandwich",
    2,
    "wqe44",
    "India",
    new Date(2000, 2, 29),
    new Date(2001, 1, 11),
    "pending"
  ),
  createData(
    "Eclair",
    3,
    "opw544",
    "Finlad",
    new Date(1878, 10, 31),
    new Date(1900, 3, 12),
    "Closed"
  ),
  createData(
    "Cupcake",
    4,
    "peii",
    "Hawaii",
    new Date(1898, 7, 10),
    new Date(2008, 10, 12),
    "Ongoing"
  ),
  createData(
    "Gingerbread",
    5,
    "heyy",
    "England",
    new Date(1999, 3, 3),
    new Date(2012, 2, 21),
    "Closed"
  ),
  createData(
    "Gingerbread",
    6,
    "heyy",
    "England",
    new Date(1999, 3, 3),
    new Date(2021, 3, 21),
    "Closed"
  ),
  createData(
    "Gingerbread",
    7,
    "heyy",
    "England",
    new Date(1999, 3, 3),
    new Date(2021, 3, 21),
    "Closed"
  ),
  createData(
    "Gingerbread",
    8,
    "heyy",
    "America",
    new Date(2009, 2, 3),
    new Date(2011, 6, 7),
    "Closed"
  ),
];

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
export default function TableBodyCustom(props) {
  const { order, orderBy } = props;
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
        const startDateConvert = row.startDate.toLocaleDateString();
        const endDateConvert = row.endDate.toLocaleDateString();
        console.log(row);
        return (
          <TableRow key={row.jobid}>
            <TableCell component="th" scope="row">
              <Link to={`/job/${row.jobid}`}>{row.jobname}</Link>
            </TableCell>
            <TableCell align="right">{row.jobid}</TableCell>
            <TableCell align="right">{row.customer}</TableCell>
            <TableCell align="right">{row.location}</TableCell>
            <TableCell align="right">{startDateConvert}</TableCell>
            <TableCell align="right">{endDateConvert}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
          </TableRow>
        );
      })}
      {/* {rows.map((row) => (
        
      ))} */}
    </TableBody>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  nr,
  Name,
  Descr,
  Quantity,
  UnitPrice,
  disct,
  disctsum,
  tax,
  taxsum,
  totalsum
) {
  return {
    nr,
    Name,
    Descr,
    Quantity,
    UnitPrice,
    disct,
    disctsum,
    tax,
    taxsum,
    totalsum,
  };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 1, 3, 5, 4, 200),
  createData(2, 237, 9.0, 37, 4.3, 5, 6, 7, 7, 800),
  100,
];

export default function CusTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>nr</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Descr</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Unit Price</StyledTableCell>
            <StyledTableCell align="center">disct %</StyledTableCell>
            <StyledTableCell align="center">disct sum</StyledTableCell>
            <StyledTableCell align="center">tax %</StyledTableCell>
            <StyledTableCell align="center">tax sum</StyledTableCell>
            <StyledTableCell align="center">total sum</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row"></StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
              <StyledTableCell align="center"> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

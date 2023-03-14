import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Loantable(props) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 300,border:'2px solid' }} aria-label="simple table">
        <TableBody>
         <TableHead><strong> Your loan details</strong></TableHead>
            <TableRow>
              <TableCell>Loan Amount</TableCell>
              <TableCell align="right">{props.lAmount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>EMI</TableCell>
              <TableCell align="right">{props.emi}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Amount</TableCell>
              <TableCell align="right">{props.totalAmt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Credit Amount</TableCell>
              <TableCell align="right">{props.totalCredAmt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tenure</TableCell>
              <TableCell align="right">{props.lTenure}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Loantable
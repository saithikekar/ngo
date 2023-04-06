import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Mumbai',
    'Nakandani',
    'PENDING',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Palghar',
    'Falfool foundation',
    'ACCEPTED',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'DELHI', 'SWIGGY', 'ACCEPTED', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Thane',
    'Astitva',
    'PENDING',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Vashi',
    'Zubaan Teeth Foundation',
    'PENDING',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Applied Job</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>NGO name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Track</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right"><button>TRACK APPLICATION</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
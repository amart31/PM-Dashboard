import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: '80%',
    minHeight: '100%'
  },
});

function createData(point, size, count, pointTotal) {
  return { point, size, count, pointTotal };
}

function createKeyTableData(plannedScope, description) {
  return { plannedScope, description };
}

const keyRows = [
  createKeyTableData('Planned Scope', 'Represents the point total for all planned capabilities for CY2020. If the scope increases / decreases the values and graph will reflect the change and when this occurred.'),
  createKeyTableData('Cumulative Completed', 'Represents the amount of work completed to-date based on each week.'),
  createKeyTableData('Estimated Trajectory', 'Anticipated burn against the total points for CY2020 release. Scenario 3 (High Velocity) = ~6 points per week. Scenario 2 (Average Velocity) = ~4 points per week. Scenario 1 (Low Velocity) = ~2 points per week.'),

];

const rows = [
  createData(1, 'S', 8, 8),
  createData(2, 'M', 10, 20),
  createData(3, 'L', 3, 9),
  createData(4, 'XL', 0, 0),
  createData(5, 'XXL', 1, 8),
];

function totalPoints(items) {
    return items.map(({ pointTotal }) => pointTotal).reduce((sum, i) => sum + i, 0);
  }

  const allPoints = totalPoints(rows);

export default function SimpleTables() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Points table">
          <TableHead>
            <TableRow>
              <TableCell>Point</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">CY Capabilities (Count)</TableCell>
              <TableCell align="right">Point Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.point}>
                <TableCell component="th" scope="row">
                  {row.point} 
                </TableCell>
                <TableCell align="right">{row.size}</TableCell>
                <TableCell align="right">{row.count} capabilities</TableCell>
                <TableCell align="right">{row.pointTotal} points</TableCell>
              </TableRow>
            ))}

            <TableRow>
            
            <TableCell colSpan={3}>Total Points</TableCell>
            <TableCell align="right">{allPoints} points</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Burn Chart keys table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keyRows.map((row) => (
              <TableRow key={row.plannedScope}>
                <TableCell component="th" scope="row">
                  {row.plannedScope}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    </div>
  );
}
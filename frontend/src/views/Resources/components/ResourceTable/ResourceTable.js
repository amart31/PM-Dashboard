import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




function ResourceTable() {
  const classes = useStyles();


  const { store } = useContext(Context);
  const rows = store.projects;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Resource Name</TableCell>
            <TableCell align="right">Project ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Updated Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell align="right">{row.resourceName}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.updatedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default injectContext(ResourceTable);
import React, { useContext } from 'react';
import clsx from 'clsx';
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

import { StatusBullet } from 'components';

const useStyles = makeStyles(theme =>({
  table: {
    minWidth: 650,
  },
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  }
}));

const statusColors = {
  Done: 'success',
  ToDo: 'info',
  Working: 'warning'
};


const CapabilitiesTable =(props) =>{
  const classes = useStyles();
  const { className, ...rest } = props;

  const { store } = useContext(Context);
  const rows = store.capabilities;

  return (
    <TableContainer component={Paper} {...rest}
      className={clsx(classes.root, className)}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Capability Number</TableCell>
            <TableCell >Capability Name</TableCell>
            <TableCell >Size</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Lenght</TableCell>
            <TableCell >Dependency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.id}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.size}</TableCell>
              <TableCell >
                <div className={classes.statusContainer}>
              
              <StatusBullet
                className={classes.status}
                color={statusColors[row.status]}
                size="sm"
              />{row.status}
              </div>
              
              </TableCell>
              <TableCell >{row.length} days</TableCell>
              <TableCell >{row.dependency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CapabilitiesTable.propTypes = {
  className: PropTypes.string
};

export default injectContext(CapabilitiesTable);
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

import moment from 'moment';

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


const ResourceTable =(props) =>{
  const classes = useStyles();
  const { className, ...rest } = props;

  const { store } = useContext(Context);
  const rows = store.projects;

  return (
    <TableContainer component={Paper} {...rest}
      className={clsx(classes.root, className)}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell >Resource Name</TableCell>
            <TableCell >Project ID</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Duration</TableCell>
            <TableCell >Updated Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.id} hover >
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell >{row.resourceName}</TableCell>
              <TableCell >{row.id}</TableCell>
              <TableCell >
                <div className={classes.statusContainer}>
              
              <StatusBullet
                className={classes.status}
                color={statusColors[row.status]}
                size="sm"
              />{row.status}
              </div>
              
              </TableCell>
              <TableCell >{row.duration} days</TableCell>
              <TableCell >{moment(row.updatedDate).format('MM/DD/YYYY')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ResourceTable.propTypes = {
  className: PropTypes.string
};

export default injectContext(ResourceTable);
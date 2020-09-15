import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';

import { StatusBullet } from 'components';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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
  'In Development': 'success',
  'Not Started': 'warning',
  'Elaboration Complete': 'info',
  'In Elaboration': 'primary',
};

const CapabilitiesTable =(props) =>{
  const classes = useStyles();
  const { className, ...rest } = props;
  const { store } = useContext(Context);

  const [capabilities, setCapabilities] = useState(store.capabilities);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, capabilities.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetch('https://bah-pm-dashboard-backend.herokuapp.com/capabilities')
      .then(response => response.json())
      .then(data => {
        setCapabilities(data.items);
        console.log(data.items);
        console.log(capabilities);
      })
  }, []);

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
            <TableCell >Length</TableCell>
            <TableCell >Dependency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {(rowsPerPage > 0
          ? capabilities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : capabilities
        ).map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.number}
            </TableCell>
            <TableCell>
              {row.name}
            </TableCell>
            <TableCell>
              {row.size}
            </TableCell>
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
              <TableCell >{row.dependancy}</TableCell>
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}

          
        </TableBody>
        <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            count={capabilities.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
      </Table>
    </TableContainer>
  );
}

CapabilitiesTable.propTypes = {
  className: PropTypes.string
};

export default injectContext(CapabilitiesTable);

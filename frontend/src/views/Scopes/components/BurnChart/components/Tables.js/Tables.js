import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import injectContext from '../../../../../../store/appContext';
import { Context } from '../../../../../../store/appContext';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import {  useTheme  } from '@material-ui/core/styles';

import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

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



const useStyles = makeStyles((theme)=>({
  
  table: {
    minWidth: '80%',
    minHeight: '100%'
  },
  typography: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    minHeight: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  btn: {
    margin: theme.spacing(2)
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
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
const PointsTable =(props) =>{
  const classes = useStyles();
  const { store } = useContext(Context);
  const { className, ...rest } = props;

  const [points, setPoints] = useState(store.pointsSize);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, points.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetch('https://bah-pm-dashboard-backend.herokuapp.com/future_capabilities')
      .then(response => response.json())
      .then(data => {
        setPoints(data.items);
      })
  }, []);

  return (
    <TableContainer component={Paper} {...rest}
      className={clsx(classes.root, className)}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Points</TableCell>
            <TableCell >Size</TableCell>
            <TableCell >Points Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {(rowsPerPage > 0
          ? points.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : points
        ).map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.points}
            </TableCell>
            
            <TableCell >
              
                  {row.size}
               
              
              </TableCell>
              <TableCell>
              {row.capabilities_count}
            </TableCell>
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
            count={points.length}
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

PointsTable.propTypes = {
  className: PropTypes.string
};

function PointsForm() {
  const classes = useStyles();
  const { store, actions } = useContext(Context);
  const [points, setPoints] = React.useState(store.pointsSize);
  const [count, setCount] = React.useState('');
  const [size, setSize] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [status, setStatus] = React.useState('');

  

  const xxxlTotal = points.filter(function(item){
    if (item.size === 'XXL') {
      return true;
    } else {
      return false;
    }
  });

  var xxlTestTotal = xxxlTotal[0];

  var xxlTesting = xxxlTotal[0];

  console.log(xxxlTotal);
  console.log(xxlTestTotal);
  console.log(xxlTesting);



  const mTotal = points.filter(function(item){
    if (item.size === 'M') {
      return true;
    } else {
      return false;
    }
  }).count *2;

  const lTotal = points.filter(function(item){
    if (item.size === 'L') {
      return true;
    } else {
      return false;
    }
  }).count *3;

  const xlTotal = points.filter(function(item){
    if (item.size === 'XL') {
      return true;
    } else {
      return false;
    }
  }).count *5;

  const xxlTotal = points.filter(function(item){
    if (item.size === 'XXL') {
      return true;
    } else {
      return false;
    }
  }).count *8;

  var total4 =   mTotal + lTotal + xlTotal + xxlTotal;


  

  useEffect(() => {
    fetch('https://bah-pm-dashboard-backend.herokuapp.com/future_capabilities')
      .then(response => response.json())
      .then(data => {
        setPoints(data.items);
      })
  }, []);
  


  const handleChange = (event) => {
    setCount(event.target.value);
   
  };
  const handleSize = (event) => {
    setSize(event.target.value);
   
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          multiline
          rowsMax={4}
          value={count}
          onChange={handleChange}
        />
       
      </div>
      <div>
        
        <FormControl className={classes.formControl}>

          <InputLabel id="size">Size</InputLabel>
          <Select
            labelId='statusLabel'
            id="size"
            value={size}
            onChange={handleSize}
          >
            <MenuItem value={2}>S</MenuItem>
            <MenuItem value={3}>M</MenuItem>
            <MenuItem value={4}>L</MenuItem>
            <MenuItem value={5}>XL</MenuItem>
            <MenuItem value={6}>XXL</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        actions.updatePoints(count, size);
        actions.createScope(
          total4
        );
      }}
      >
  Submit
      </Button>
    </form>
  );
}

PointsForm.contextTypes = {
  projectName: PropTypes.string,
  resourceName: PropTypes.string,
  duration: PropTypes.number
};


function createKeyTableData(plannedScope, description) {
  return { plannedScope, description };
}

const keyRows = [
  createKeyTableData('Planned Scope', 'Represents the point total for all planned capabilities for CY2020. If the scope increases / decreases the values and graph will reflect the change and when this occurred.'),
  createKeyTableData('Cumulative Completed', 'Represents the amount of work completed to-date based on each week.'),
  createKeyTableData('Estimated Trajectory', 'Anticipated burn against the total points for CY2020 release. Scenario 3 (High Velocity) = ~6 points per week. Scenario 2 (Average Velocity) = ~4 points per week. Scenario 1 (Low Velocity) = ~2 points per week.'),

];


function SimpleTables() {

  const { useState } = React;


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);


  const [points, setPoints] = React.useState('');

  const handleCount = (event) => {
    setPoints(event.target.value);
    event.preventDefault();
   
  };

  const handlePoints = (event) => {
    setPoints(event.target.value);
    event.preventDefault();
   
  };
  
  function refreshPage() {
    window.location.reload(false);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { store, actions } = useContext(Context);

  return (
    <div>
    <PointsTable />
    <br/>

    <PointsForm />
    


      <br />

      

      <br/>

      <TableContainer component={Paper}>
        <Table aria-label="Burn Chart keys table" className={classes.table}>
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

export default injectContext(SimpleTables);
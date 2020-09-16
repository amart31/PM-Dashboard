import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import MaterialTable from 'material-table';

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

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
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
  }
}));



function createKeyTableData(plannedScope, description) {
  return { plannedScope, description };
}

const keyRows = [
  createKeyTableData('Planned Scope', 'Represents the point total for all planned capabilities for CY2020. If the scope increases / decreases the values and graph will reflect the change and when this occurred.'),
  createKeyTableData('Cumulative Completed', 'Represents the amount of work completed to-date based on each week.'),
  createKeyTableData('Estimated Trajectory', 'Anticipated burn against the total points for CY2020 release. Scenario 3 (High Velocity) = ~6 points per week. Scenario 2 (Average Velocity) = ~4 points per week. Scenario 1 (Low Velocity) = ~2 points per week.'),

];



function totalPoints(items) {
  return items.map(({ pointTotal }) => pointTotal).reduce((sum, i) => sum + i, 0);
}



function CustomEditComponent(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    {
      title: 'Point Value', field: 'point',
      editComponent: props => (
        <input
          type="number"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    { title: 'Size', field: 'size', lookup: { 1: 'S', 2: 'M' , 3: 'L', 5: 'XL', 8: 'XXL' }, editComponent: props => (
      <input
        type="text"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    )},
    { title: 'Total Count', field: 'count', type: 'numeric' },
    {
      title: 'Total Points',
      field: 'total',
      type: 'numeric'
    },
  
  ]);

  const [data, setData] = useState([
    { point: 1, size: 1, count: 8, total: 8 },
    { point: 2, size: 2, count: 10, total: 20 },
    { point: 3, size: 3, count: 3, total: 9 },
    { point: 5, size: 5, count: 0, total: 0 },
    { point: 8, size: 8, count: 2, total: 16 },
  ]);

  var testS = data[0].count;
  var testM = data[1].count *2;
  var testL = data[2].count *3;
  var testXL = data[3].count *5;
  var testXXL = data[4].count * 8;

  const [totalTest2, setTotalTest2] = useState(totalPointsTest);

  var totalPointsTest =  testS + testM + testL + testXL + testXXL;
  console.log(testS);
  console.log(testM);
  console.log(testL);
  console.log(testXL);
  console.log(testXXL);

  console.log(totalPointsTest);
  console.log(totalTest2);

  const { store, actions } = useContext(Context);

  return (
    <div>
      <MaterialTable
        title="Custom Edit Component Preview"
        columns={columns}
        icons={tableIcons}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
              
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                setTotalTest2(dataUpdate);
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve();
              }, 1000)
            }),
        }}
      />
      <TableRow>
            
        <TableCell colSpan={3}>Total Points</TableCell>
        <TableCell align="right">{totalPointsTest} points</TableCell>
      </TableRow>
      <TableRow>
            
      <TableCell colSpan={3}>Total Points in DB</TableCell>
      <TableCell align="right">{store.totalPoints} points</TableCell>
    </TableRow>
      <div>
        
        <Button  color="primary" variant="contained" 
          onClick={() => {
            actions.createScope(
              totalPointsTest
            );
            
          }
          }
        >
Submit
        </Button>

          
      </div>
    </div>
  )
}

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
      <CustomEditComponent />
      <br/>


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
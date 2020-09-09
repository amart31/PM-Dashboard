import React, {forwardRef, useState, useEffect, useContext } from 'react';

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
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

import MaterialTable from 'material-table';


import injectContext from '../../../../store/appContext';

import { Context } from '../../../../store/appContext';

const TasksTable =()  =>{

 

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
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [state, setState] = React.useState({

    columns: [
      { title: 'Assigned', field: 'assigned' },
      { title: 'Duration', field: 'duration', type: 'numeric' },
      {
        title: 'Project',
        field: 'project',
        
      },
      { title: 'Status', field: 'status',
        lookup: {1: 'In-Progress', 2: 'Pending', 3: 'Done', 4: 'Stuck'} },
    ], 
    data: [
      { assigned: 'Praveen', duration: 100, project: 'Tableau', status: 1 },
      { assigned: 'Alexa', duration: 100, project: 'Teamwork', status: 3 },
      { assigned: 'Andy', duration: 100, project: 'Basecamp', status: 3 },
      { assigned: 'Andy', duration: 100, project: 'ReactJS', status: 1 },
      { assigned: 'Heather', duration: 100, project: 'MicrosoftProject', status: 3 },
      { assigned: 'Heather', duration: 100, project: 'Sharepoint', status: 3 },
      { assigned: 'Isaac', duration: 100, project: 'Javascript', status: 1 },
      { assigned: 'Jon', duration: 100, project: 'Opensource', status: 3 },
      { assigned: 'Paul', duration: 100, project: 'Asana', status: 3 },
      { assigned: 'Praveen', duration: 100, project: 'MondayDotCom', status: 3 },
      { assigned: 'Isaac', duration: 100, project: 'Wrike', status: 3 },

    ],

  
  });

  

  const { store, actions } = useContext(Context);
  return (
   
    <MaterialTable
      icons={tableIcons}
      title="Resource Management"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
      
  );
}



TasksTable.contextTypes = {
  items: PropTypes.array
}

export default injectContext(TasksTable);
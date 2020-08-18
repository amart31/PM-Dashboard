import React, {forwardRef} from "react";

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

import { TasksResources } from './components'; 

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


export default function Tasks() {
  const [state, setState] = React.useState({

    columns: [
      { title: 'Assigned', field: 'assigned' },
      { title: 'Duration', field: 'duration', type: 'numeric' },
      {
        title: 'Project',
        field: 'project',
        lookup: { 1: 'Tableau', 2: 'Teamwork', 3: 'Basecamp', 4: 'ReactJS', 5: 'MicrosoftProject', 6: 'Sharepoint', 7: 'Javascript', 8: 'Opensource', 9: 'Asana', 10: 'MondayDotCom', 11: 'Wrike' },
      },
      { title: 'Status', field: 'status' },
    ],
    data: [
      { assigned: 'Praveen', duration: 100, project: 1, status: 'Working' },
      { assigned: 'Alexa', duration: 100, project: 2, status: 'Done' },
      { assigned: 'Andy', duration: 100, project: 3, status: 'Done' },
      { assigned: 'Andy', duration: 100, project: 4, status: 'Working' },
      { assigned: 'Heather', duration: 100, project: 5, status: 'Done' },
      { assigned: 'Heather', duration: 100, project: 6, status: 'Done' },
      { assigned: 'Isaac', duration: 100, project: 7, status: 'Working' },
      { assigned: 'Jon', duration: 100, project: 8, status: 'Done' },
      { assigned: 'Paul', duration: 100, project: 9, status: 'Done' },
      { assigned: 'Praveen', duration: 100, project: 10, status: 'Done' },
      { assigned: 'Isaac', duration: 100, project: 11, status: 'Done' },

    ],

  
  });


  

  return (
    <div>
   <TasksResources />
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
    </div>
  );
}
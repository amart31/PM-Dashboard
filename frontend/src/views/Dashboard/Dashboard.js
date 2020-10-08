import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import {
  ProjectManagement,
  Technical,
  ScopeManagement,
  Resources,
  ClientSatisfaction,
  SecurityITC,
  ProjectSummary,
  PMTasks,
  ScopeTasks,
  TechnicalTasks,
  ResourcesTasks,
  OrgChart,
  MenuNav,
  FiancialsTable,
  ClientTasks,
  FinancialTasks,
  SecurityTasks,
  FinancialsForm,
  ResourcesSummary,
  ModifyFinancialForm
} from './components';

import { Context } from '../../store/appContext';

import TableauChart from '../Financials/components/FinancialsTableau/FiancialsTableau';
import TableauChart2 from '../Financials/components/TableauBudget/TableauBudget';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    
    
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

    
          <OrgChart />
       
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Project Management" {...a11yProps(0)} />
          <Tab label="Scope Management" {...a11yProps(1)} />
          <Tab label="Technical" {...a11yProps(2)} />
          <Tab label="Resources" {...a11yProps(3)} />
          <Tab label="Client Satisfaction" {...a11yProps(4)} />
          <Tab label="Security" {...a11yProps(5)} />
          <Tab label="Financials" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <ProjectSummary />
      <br/>
      <PMTasks />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ScopeTasks />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TechnicalTasks />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ResourcesSummary />
      <br/>
      <FiancialsTable />
      <br/>
      <FinancialsForm />
      <br/>
      <ModifyFinancialForm />
      <br/>
      <ResourcesTasks />
      <br/> 
      
         
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ClientTasks />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <SecurityTasks />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <FinancialTasks />
      <TableauChart />
      <TableauChart2 />
      </TabPanel>
    </div>
  );
}


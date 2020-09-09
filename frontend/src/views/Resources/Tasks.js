import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ResourceCard from './components/ResourceCard';
import TableauBoard from '../Dashboard/components/TableauBoard';
import ResourceForm from './components/ResourceForm';
import ResourceTable from './components/ResourceTable';
import injectContext from '../../store/appContext';
import { Context } from '../../store/appContext';

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
        <Box p={3}>
          <Typography>{children}</Typography>
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

const useStyles = makeStyles((theme) => ({
  root: {
   
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Tasks =()  =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Resources List" {...a11yProps(0)} />
          <Tab label="Add Resources" {...a11yProps(1)} />
          <Tab label="Tableau" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <ResourceTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        

      <ResourceForm />
            
            
   
    
      
      </TabPanel>
      <TabPanel value={value} index={2}>
       <TableauBoard />
      </TabPanel>
      
    </div>
  );
}

export default injectContext(Tasks);
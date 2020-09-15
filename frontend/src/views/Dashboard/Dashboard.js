import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

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
  OrgChart
} from './components';

import { Context } from '../../store/appContext';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid
        container
        spacing={2}
      >
      <Grid
          item
          
          xs={12}
        >
          <OrgChart />
        </Grid>
        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <ProjectManagement />
        </Grid>
        
        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <ScopeManagement />
        </Grid>
        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <Technical />
        </Grid>
        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <Resources />
        </Grid>

        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <ClientSatisfaction />
        </Grid>

        <Grid
          item
          lg={2}
          sm={6}
          xl={2}
          xs={6}
        >
          <SecurityITC />
        </Grid>

        
        <Grid
          item
          lg={10}
          sm={12}
          xl={10}
          xs={12}
        >
          <ProjectSummary />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <PMTasks />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <ScopeTasks />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <TechnicalTasks />
        </Grid>

        <Grid
          item
          lg={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <ResourcesTasks />
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;

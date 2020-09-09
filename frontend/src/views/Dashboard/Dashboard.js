import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  ProjectManagement,
  TableauBoard,
  TasksCompleted,
  Technical,
  ScopeManagement,
  Resources,
  Applications,
  TasksByStatus,
  LatestTasks,
  PendingTasks,
  
  PMBoard,
  ClientSatisfaction,
  SecurityITC
} from './components';

import { Context } from '../../store/appContext';
import Financial from './components/Financial';

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
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <PMBoard />
        </Grid>
        
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <TasksByStatus />
        </Grid>


        


        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Applications />
        </Grid>


        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TableauBoard />
        </Grid>


        <Grid
          item
          lg={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <PendingTasks />
        </Grid>


        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestTasks />
        </Grid>

        
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          < TasksCompleted/>
        </Grid>
        
        
      </Grid>
    </div>
  );
};

export default Dashboard;

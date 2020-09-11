
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  ResourceManagement,
  Banner,
  Tables
  
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Tableau = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
     
      <Grid
      item
      justify="start"
      lg={12}
      md={12}
      xl={12}
      xs={12}
    >
      <Banner />
    </Grid>
       
        <Grid
        container
        spacing={1}
        justify="space-evenly"
      >
     
      <Grid
      item
      
      lg={8}
      md={8}
      xl={8}
      xs={12}
    >
    <ResourceManagement />
    </Grid>
        <Grid
          item
      
          lg={4}
          md={4}
          xl={4}
          xs={12}
        >
          <Tables />
        </Grid>
        
        


      </Grid>
        


      </Grid>
    </div>
  );
};

export default Tableau;

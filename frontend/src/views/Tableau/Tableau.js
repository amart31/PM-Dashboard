
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  ResourceManagement,
  ProjectManagement,
  
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
        spacing={4}
      >
     

        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <ResourceManagement />
        </Grid>
        
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <ProjectManagement />
        </Grid>


      </Grid>
    </div>
  );
};

export default Tableau;

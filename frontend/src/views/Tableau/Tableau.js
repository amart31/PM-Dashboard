
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  ResourceManagement
  
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
        justify="center"
        spacing={4}
      >
     

        <Grid
          item
          justify="center"
          lg={8}
          md={8}
          xl={8}
          xs={8}
        >
          <ResourceManagement />
        </Grid>
        
        


      </Grid>
    </div>
  );
};

export default Tableau;

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  CapabilitiesTable,
  Forecast,
  ProgressSummary,
  Form
  
} from './components';
import injectContext from '../../store/appContext';
import { Context } from '../../store/appContext';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Capabilities = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <Forecast />
        </Grid>
        
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <ProgressSummary />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
      >
        <Form />
      </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <CapabilitiesTable />
        </Grid>

        
       
        
        
      </Grid>
    </div>
  );
};

export default injectContext(Capabilities);

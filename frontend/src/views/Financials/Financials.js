import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  FinancialsForm,
  FinancialsTable,
  TableauBudget
} from './components';

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
        <FinancialsForm />
        </Grid>
        
        <Grid
        item
        
        lg={6}
        sm={6}
        xl={6}
        xs={6}
        >
        <TableauBudget />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
        <FinancialsTable />
        </Grid>
       
        
        
      </Grid>
    </div>
  );
};

export default Capabilities;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  FinancialsTableau,
  TableauBudget
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const Capabilities = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid
        container
      >
       
        
      

        <Grid
          item
          
          xs={12}
        >
        <FinancialsTableau />
        </Grid>

        <Grid
          item
          xs={12}
        >
        <TableauBudget />
        </Grid>
       
        
        
      </Grid>
    </div>
  );
};

export default Capabilities;



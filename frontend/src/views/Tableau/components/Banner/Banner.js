import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    width: '100%'
  },
}));

export default function BannerTitle() {
  const classes = useStyles();

  return(
    <div className={classes.root}>{'CY2020 Burn-up Chart'}
    <br/>
      <Typography variant="body1" component="body1">
      The CY burn-up chart is based on relative estimation of each planned capability using the Fibonacci sequence (1,2,3,5,8) to generate a cumulative point total. As work is completed (both elaboration and development) the burn-up down chart will reflect progress and overall velocity of the Busines Capabilities. 
      </Typography>
    </div>
  );
}
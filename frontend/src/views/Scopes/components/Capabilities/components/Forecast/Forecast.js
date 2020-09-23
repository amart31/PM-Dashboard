import React, { useContext, useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, IconButton, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';

import injectContext from '../../../../../../store/appContext';
import { Context } from '../../../../../../store/appContext';

import RefreshIcon from '@material-ui/icons/Refresh';


const useStyles = makeStyles(theme => ({
  root: {
    height: 350,
    color: theme.palette.primary.contrastText,
  },
  card: {
    width: '100%',
  },
  grid:{
    width: '50%',
    padding: theme.spacing(1),
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    margin: theme.spacing(),
  },
  title: {
    fontWeight: 700,
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
}));

function Forecast(props) {

  const { className, ...rest } = props;
  const { store } = useContext(Context);
  const classes = useStyles();
  const [capabilities, setCapabilities] = useState(store.capabilities);
  console.log(capabilities);

  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    fetch('https://bah-pm-dashboard-backend.herokuapp.com/capabilities')
      .then(response => response.json())
      .then(data => {
        setCapabilities(data.items);
        console.log(data.items);
        console.log(capabilities);
      })
  }, []);


  const s = capabilities.filter(function(item){
    if (item.size === 'S') {
      return true;
    } else {
      return false;
    }
  }).length;

  const m = capabilities.filter(function(item){
    if (item.size === 'M') {
      return true;
    } else {
      return false;
    }
  }).length;

  const l = capabilities.filter(function(item){
    if (item.size === 'L') {
      return true;
    } else {
      return false;
    }
  }).length;

  const xl = capabilities.filter(function(item){
    if (item.size === 'XL') {
      return true;
    } else {
      return false;
    }
  }).length;

  const xxl = capabilities.filter(function(item){
    if (item.size === 'XXL') {
      return true;
    } else {
      return false;
    }
  }).length;

  console.log(s);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Forecasts"
      />
      <Divider />
      <CardContent>
      

        <Grid
          container
          justify="space-evenly"
          
        >
          <Grid item className={classes.grid}>
            


            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
              CY20 Forecast
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="p">
                  {bull}Total Capabilities:  {capabilities.length}
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}Features:  Not fully created
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}Stories:  Not fully created 
                </Typography>
                <Divider className={classes.divider} />
                
              </CardContent>
              
            </Card>



          </Grid>

          <Grid item className={classes.grid}>
        
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
        CY20 In Progress
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="p">
                  {bull}S Capabilities:  {s}
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}M Capabilities:  {m}
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}L Capabilities:  {l}
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}XL Capabilities:  {xl}
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}XXL Capabilities:  {xxl}
                </Typography>
                <Divider className={classes.divider} />
          
              </CardContent>
        
            </Card>
      
          </Grid>
         
        
         
        </Grid>

        
      </CardContent>
    </Card>
    
  );
}

Forecast.propTypes = {
  className: PropTypes.string,
  dependancy: PropTypes.string,
  length: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.string,
  status: PropTypes.string,

};


export default injectContext(Forecast);
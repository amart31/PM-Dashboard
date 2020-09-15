import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, IconButton, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';

import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';

import RefreshIcon from '@material-ui/icons/Refresh';


const useStyles = makeStyles(theme => ({
  root: {
    height: 350,
    color: theme.palette.primary.contrastText,
  },
  card: {
    height: 200,
    width: 300,
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
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

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
          justify="space-between"
          
        >
          <Grid item>
            


            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
              CY20 Forecast
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="p">
                  {bull}Capabilities:  24
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

          <Grid item>
        
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
        CY20 In Progress
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" component="p">
                  {bull}Capabilities:  9
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}Features:  22
                </Typography>
                <Typography variant="body1" component="p">
                  {bull}Stories:  2
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
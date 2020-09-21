import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import data from './data';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, CardContent, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.main
  },
  differenceValue: {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1)
  }
}));

const MenuNav = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [menuItems] = useState(data);

  return (

    <Grid
    container
    direction="row-reverse"
    justify="space-evenly"
    alignItems="center"
      >
      {menuItems.map(item => (
        <Grid
        item
        key={item.id}
        xs={2}
      >


       
     

        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
    
          <CardContent>
            <Grid
              container
              justify="space-between"
            >
              <Grid item>
                <Typography
                  className={classes.title}
                  color="inherit"
                  gutterBottom
                  variant="body2"
                >
                  {item.name}
                </Typography>
           
              </Grid>
              <Grid item>
                <Avatar className={classes.avatar}>
                {item.icon} 
                </Avatar>
              </Grid>
            </Grid>
            <div className={classes.difference}>
            {item.arrow}
              
            </div>
          </CardContent>
    
        </Card>
   
        </Grid>
       
      ))}
    
        

       
        </Grid>
    
     
   




      
  );
};

MenuNav.propTypes = {
  className: PropTypes.string
};

export default MenuNav;

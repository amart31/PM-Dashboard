import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  toolbarImg: {
    height: 64,
    objectFit: 'contain'
  },
  img: {
    width: 200,
    height: 200,
    objectFit: 'contain'
  },
  flexGrow: {
    flexGrow: 1
  },
  link: {textDecoration: 'none',
    color: 'white'}
  ,
  toolbarLink: {
    margin: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar className={classes.toolbarImg}>
        <Link to="/">
          <img
            className={classes.img}
            alt="Logo"
            src="https://github.com/amart31/PM-Dashboard/blob/master/frontend/public/images/logos/logo--white.png?raw=true"
          />
        </Link>
        <div className={classes.flexGrow} />
       
          <Link to="/signin" className={classes.link}>
            <Typography className={classes.toolbarLink} color="inherit" variant="button" display="block" gutterBottom>
              <ExitToAppIcon />
            </Typography>
          </Link>

       
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;

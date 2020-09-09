import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InputIcon from '@material-ui/icons/Input';
import Typography from '@material-ui/core/Typography';

import Tooltip from '@material-ui/core/Tooltip';
import { isNonNullExpression } from 'typescript';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
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

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            width="100" 
            height="60"
            src="https://github.com/amart31/PM-Dashboard/blob/master/frontend/public/images/logos/logo--white.png?raw=true"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <RouterLink to="/capabilities" className={classes.link}>
            <Typography className={classes.toolbarLink} color="inherit" variant="button" display="block" gutterBottom>
        Capabilitites
            </Typography>
          </RouterLink>
          <RouterLink to="/financials" className={classes.link}>
            <Typography className={classes.toolbarLink} color="inherit" variant="button" display="block" gutterBottom>
        Financials
            </Typography>
          </RouterLink>
        </Hidden>
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

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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Tooltip from '@material-ui/core/Tooltip';
import { isNonNullExpression } from 'typescript';

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

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar className={classes.toolbarImg}>
        <RouterLink to="/">
          <img
            className={classes.img}
            alt="Logo"
            src="https://github.com/amart31/PM-Dashboard/blob/master/frontend/public/images/logos/logo--white.png?raw=true"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <RouterLink to="/signin" className={classes.link}>
            <Typography className={classes.toolbarLink} color="inherit" variant="button" display="block" gutterBottom>
              <ExitToAppIcon />
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

import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
    marginTop: theme.spacing(2),
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

const Resources = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
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
              RESOURCES
            </Typography>
           
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessTimeIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          
          <ArrowUpwardIcon className={classes.differenceIcon} />
        </div>
      </CardContent>
    </Card>
  );
};

Resources.propTypes = {
  className: PropTypes.string
};

export default Resources;
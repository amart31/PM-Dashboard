import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar
} from '@material-ui/core';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
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
    color: theme.palette.primary.main
  },
  
  differenceValue: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(1)
  },
}));

const Technical = props => {
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
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TECHNICAL
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ImportantDevicesIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowForwardIcon className={classes.differenceIcon} />
          
        </div>
      </CardContent>
    </Card>
  );
};

Technical.propTypes = {
  className: PropTypes.string
};

export default Technical;

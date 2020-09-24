import React, { useState, useContext, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RefreshIcon from '@material-ui/icons/Refresh';

import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';

const useStyles = makeStyles(theme => ({
  root: {
    height: 350,
  },
  chartContainer: {
    position: 'relative',
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const ResourcesSumary = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();
  const { store } = useContext(Context);

  const [capabilities, setCapabilities] = useState(store.capabilities);

  useEffect(() => {
    fetch('https://bah-pm-dashboard-backend.herokuapp.com/resources')
      .then(response => response.json())
      .then(data => {
        setCapabilities(data.items);
        console.log(data.items);
        console.log(capabilities);
       
      })
  },[] );

  const cleared = capabilities.filter(status => status.status === 'Cleared');
  const notBillable = capabilities.filter(status => status.status === 'Not Billable');
  const billable = capabilities.filter(status => status.status === 'Fully Billable');
  const onboarding = capabilities.filter(status => status.status === 'Onboarding');
  console.log(cleared);
  console.log(notBillable);
  console.log(billable);
  console.log(onboarding);

  const data = {
    datasets: [
      {
        data: [cleared.length, notBillable.length, billable.length, onboarding.length],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main,
          theme.palette.success.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Cleared', 'Not Billable', 'Fully Billable', 'Onboarding']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const devices = [
    {
      title: 'Cleared',
      value: cleared.length,
      icon: <WorkIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Not Billable',
      value: notBillable.length,
      icon: <WorkOutlineIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Fully Billable',
      value: billable.length,
      icon: <AssignmentTurnedInIcon />,
      color: theme.palette.warning.main
    },
    {
      title: 'Onboarding',
      value: onboarding.length,
      icon: <AssignmentTurnedInIcon />,
      color: theme.palette.warning.main
    }
  ];

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
        title="Progress Summary"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
        <div className={classes.stats}>
          {devices.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography
                style={{ color: device.color }}
                variant="h2"
              >
                {device.value}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

ResourcesSumary.propTypes = {
  className: PropTypes.string
};

export default injectContext(ResourcesSumary);

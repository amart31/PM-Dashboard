import React from 'react';
import uuid from 'uuid/v1';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MoneyIcon from '@material-ui/icons/Money';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

export default [
  {
    id: uuid(),
    name: 'Project Management',
    icon: <MoneyIcon />,
    arrow: <ArrowForwardIcon/>
  },
  {
    id: uuid(),
    name: 'Scope Management',
    icon: <MoneyIcon />,
    arrow: <ArrowDownwardIcon/>
  },
  {
    id: uuid(),
    name: 'Technical',
    icon: <ImportantDevicesIcon />,
    arrow: <ArrowForwardIcon/>
  },
  {
    id: uuid(),
    name: 'Resources',
    icon: <AccessTimeIcon />,
    arrow: <ArrowUpwardIcon/>
  },
  {
    id: uuid(),
    name: 'Client Satisfaction',
    icon: <MoneyIcon />,
    arrow: <ArrowForwardIcon/>
  },
  {
    id: uuid(),
    name: 'Security/ITC',
    icon: <MoneyIcon />,
    arrow: <ArrowForwardIcon/>
  },
  {
    id: uuid(),
    name: 'Financials',
    icon: <MoneyIcon />,
    arrow: <ArrowDownwardIcon/>
  },
];

import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';


import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import AccessTimeIcon from '@material-ui/icons/AccessTime';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

function Forecast(props) {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [length, setLength] = React.useState('');
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [size, setSize] = React.useState('');
  const [status, setStatus] = React.useState('');
  


  const handleLength = (event) => {
    setLength(event.target.value);
   
  };
  const handleName = (event) => {
    setName(event.target.value);
   
  };
  
  const handleNumber = (event) => {
    setNumber(event.target.value);
   
  };
  const handleSize = (event) => {
    setSize(event.target.value);
   
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
   
  };

  const { store, actions } = useContext(Context);

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
              FORECAST
            </Typography>
            <ArrowUpwardIcon className={classes.differenceIcon} />
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AccessTimeIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <Grid item>
        
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="name"
                label="Capability Name"
                placeholder="Capability's Name"
                multiline
                rowsMax={4}
                value={name}
                onChange={handleName}
              />
              <TextField
                id="number"
                label="Capability Number"
                placeholder="Capability's Number"
                multiline
                rowsMax={4}
                value={number}
                onChange={handleNumber}
              />
         
            </div>
            <div>
         
              <TextField
                id="length"
                label="Length"
                placeholder="Capability's Length"
                placeholder="Capability's Length"
                multiline
                rowsMax={4}
                value={length}
                onChange={handleLength}
            
              />

              <TextField
                id="size"
                label="Size"
                placeholder="Capability's Size"
                placeholder="Capability's Size"
                multiline
                rowsMax={4}
                value={size}
                onChange={handleSize}
            
              />
         
            </div>
            <div>
          
              <FormControl className={classes.formControl}>
  
                <InputLabel id="statusLabel">Status</InputLabel>
                <Select
                  labelId='statusLabel'
                  id="status"
                  value={status}
                  onChange={handleStatus}
                >
                  <MenuItem value={'Elaboration Complete'}>Working</MenuItem>
                  <MenuItem value={'In Elaboration'}>ToDo</MenuItem>
                  <MenuItem value={'Not Started'}>Done</MenuItem>
                  <MenuItem value={'In Development'}>Done</MenuItem>
                </Select>
              </FormControl>
      
            </div>
            <Button variant="contained" color="primary" onClick={() => {
              actions.createCapability(length,
                name,
                number,
                size,
                status);
            }}
            >
    Submit
            </Button>
          </form>
        
        </Grid>
      </CardContent>
    </Card>
  );
}

Forecast.propTypes = {
  className: PropTypes.string,
  length: PropTypes.number
};


export default injectContext(Forecast);
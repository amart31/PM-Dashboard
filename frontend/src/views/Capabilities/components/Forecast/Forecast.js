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
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

  const [dependency, setDependency] = React.useState('');
  


  const handleLength = (event) => {
    setLength(event.target.value);
    event.preventDefault();
   
  };
  const handleName = (event) => {
    setName(event.target.value);
    event.preventDefault();
   
  };
  
  const handleNumber = (event) => {
    setNumber(event.target.value);
    event.preventDefault();
   
  };
  const handleSize = (event) => {
    setSize(event.target.value);
    event.preventDefault();
   
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
    event.preventDefault();
   
  };
  const handleDependency = (event) => {
    setDependency(event.target.value);
    event.preventDefault();
   
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
              CY2020 Progress Summary
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2"
            >
          CY2020 Forecast
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
        
          <form noValidate autoComplete="off">
            <div>
              <TextField
              className={classes.formControl}
                id="name"
                label="Capability Name"
                placeholder="Capability's Name"
                multiline
                rowsMax={6}
                value={name}
                onChange={handleName}
              />
              
              <TextField
              className={classes.formControl}
                id="number"
                type="number"
                label="Capability Number"
                placeholder="Capability's Number"
                multiline
                rowsMax={6}
                value={number}
                onChange={handleNumber}
              />
         
            </div>
            <div>


          
              <TextField
              className={classes.formControl}
                id="length"
                type="number"
                label="Length"
                placeholder="Capability's Length"
                multiline
                rowsMax={6}
                value={length}
                onChange={handleLength}
            
              />
              <FormControl className={classes.formControl}>
  
                <InputLabel id="sizeLabel">Size</InputLabel>
                <Select
                  labelId='sizeLabel'
                  id="size"
                  value={size}
                  onChange={handleSize}
                >
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'XL'}>XL</MenuItem>
                  <MenuItem value={'XXL'}>XXL</MenuItem>
                </Select>
              </FormControl>

              
         
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
                  <MenuItem value={'Elaboration Complete'}>Elaboration Complete</MenuItem>
                  <MenuItem value={'In Elaboration'}>In Elaboration</MenuItem>
                  <MenuItem value={'Not Started'}>Not Started</MenuItem>
                  <MenuItem value={'In Development'}>In Development</MenuItem>
                </Select>
              </FormControl>

              <TextField
              className={classes.formControl}
                id="dependency"
                label="Dependency"
                placeholder="Dependency"
                multiline
                rowsMax={6}
                value={dependency}
                onChange={handleDependency}
            
              />
      
            </div>
            <Button variant="contained" color="primary" onClick={() => {
              actions.createCapability(
                length,
                name,
                number,
                size,
                status
              );
              
            }
            }
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
  dependancy: PropTypes.string,
  length: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.string,
  status: PropTypes.string,

};


export default injectContext(Forecast);
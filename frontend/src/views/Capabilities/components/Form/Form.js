import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    minHeight: 50,
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
  btn: {
    margin: theme.spacing(2)
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));


function CapabilititesForm() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  function refreshPage() {
    window.location.reload(false);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Add Capability
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
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
              variant="filled"
      
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
                <MenuItem value={'Unknown'}>Unknown</MenuItem>
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
          <Button className={classes.btn} variant="contained" color="primary" onClick={() => {
            actions.createCapability(
              length,
              name,
              number,
              size,
              status,
              dependency
            );
          }
          }
          >
Submit
          </Button>
        </form>
      </Popover>
    </div>
  );
}

export default injectContext(CapabilititesForm);
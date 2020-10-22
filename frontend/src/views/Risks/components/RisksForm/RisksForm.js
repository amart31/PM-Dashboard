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


function RisksForm() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [riskActions, setRiskActions] = React.useState('');

  const [impact, setImpact] = React.useState('');
  const [riskItem, setRiskItem] = React.useState('');
  const [status, setStatus] = React.useState('');


  

  const handleRiskActions = (event) => {
    setRiskActions(event.target.value);
    event.preventDefault();
   
  };
  const handleImpact = (event) => {
    setImpact(event.target.value);
    event.preventDefault();
   
  };
  
  const handleRiskItem = (event) => {
    setRiskItem(event.target.value);
    event.preventDefault();
   
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
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
        Add Risk Item
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
              id="riskItem"
              label=""
              placeholder="Risk Item"
              multiline
              rowsMax={10}
              value={riskItem}
              onChange={handleRiskItem}
            />
        
            <TextField
              className={classes.formControl}
              id="riskActions"
              type="text"
              label="Actions"
              placeholder="Actions"
              multiline
              rowsMax={10}
              value={riskActions}
              onChange={handleRiskActions}
            />
   
          </div>
          <div>


          <FormControl className={classes.formControl}>

              <InputLabel id="impactLabel">Impact</InputLabel>
              <Select
                labelId='impactLabel'
                id="impact"
                value={impact}
                onChange={handleImpact}
              >
                <MenuItem value={'Low'}>Low</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'High'}>High</MenuItem>
              </Select>
            </FormControl>
    
            
            <FormControl className={classes.formControl}>

              <InputLabel id="statusLabel">Status</InputLabel>
              <Select
                labelId='statusLabel'
                id="status"
                value={status}
                onChange={handleStatus}
              >
                <MenuItem value={'G'}>G</MenuItem>
                <MenuItem value={'Y'}>Y</MenuItem>
                <MenuItem value={'O'}>O</MenuItem>
                <MenuItem value={'R'}>R</MenuItem>
              </Select>
            </FormControl>

        
   
          </div>
        
          <Button className={classes.btn} variant="contained" color="primary"  onClick={() => {
            actions.createRisk(
              riskActions,
              impact,
              riskItem,
              status
            );
          }}
          >
Submit
          </Button>
        </form>
      </Popover>
    </div>
  );
}

export default injectContext(RisksForm);
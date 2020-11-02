import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import PropTypes from 'prop-types';

var impactDate = new Date();

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function RisksUpdateForm() {
  const classes = useStyles();

  const [riskActions, setRiskActions] = React.useState('');
  const [impactLevel, setImpactLevel] = React.useState('');
  const [riskItem, setRiskItem] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [riskID, setRiskID] = React.useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleRiskActions = (event) => {
    setRiskActions(event.target.value);
  };

  const handleRiskID = (event) => {
    setRiskID(event.target.value);
  };

  const handleImpactLevel = (event) => {
    setImpactLevel(event.target.value);
  };

  const handleRiskItem = (event) => {
    setRiskItem(event.target.value);
  };
  
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { store, actions } = useContext(Context);
  return (
   

   

    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Modify Risk Item
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
    <form className={classes.root} noValidate autoComplete="off">
    <div>
        
        

        <div>
        <TextField
          id="riskID"
          label="Risk ID"
          placeholder="Risk's ID #"
          multiline
          rowsMax={4}
          value={riskID}
          onChange={handleRiskID}
        />
      </div>
     
      <div>
        <TextField
          id="riskItem"
          label="Risk Item"
          placeholder="Risk's Item"
          multiline
          rowsMax={4}
          value={riskItem}
          onChange={handleRiskItem}
        />
      </div>

      <div>
        <TextField
          id="riskActions"
          label="Risk Actions"
          placeholder="Action"
          multiline
          rowsMax={4}
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
            value={impactLevel}
            onChange={handleImpactLevel}
          >
            <MenuItem value={'Low'}>Low</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'High'}>High</MenuItem>
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
            <MenuItem value={'G'}>G</MenuItem>
            <MenuItem value={'Y'}>Y</MenuItem>
            <MenuItem value={'O'}>O</MenuItem>
            <MenuItem value={'R'}>R</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        actions.updateRisks(
          riskActions,
          riskID,
          impactLevel,
          riskItem,
          status
          );
      }}
      >
  Submit
      </Button>
      </div>
     
    </form>
    
    </Popover>
    </div>
    

  );
}

RisksUpdateForm.contextTypes = {
  actions: PropTypes.string,
  riskID: PropTypes.number,
  impactLevel: PropTypes.string,
  riskItem: PropTypes.string,
  status: PropTypes.string,
  
};

export default injectContext(RisksUpdateForm);
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import PropTypes from 'prop-types';

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

function ResourceForm() {
  const classes = useStyles();
  const [projectName, setProjectName] = React.useState('');
  const [resourceName, setResourceName] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [status, setStatus] = React.useState('');
  


  const handleChange = (event) => {
    setProjectName(event.target.value);
   
  };
  const handleResource = (event) => {
    setResourceName(event.target.value);
   
  };
  
  const handleDuration = (event) => {
    setDuration(event.target.value);
   
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
   
  };


  const { store, actions } = useContext(Context);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="projectName"
          label="Project Name"
          placeholder="Projects's Name"
          multiline
          rowsMax={4}
          value={projectName}
          onChange={handleChange}
        />
        <TextField
          id="resourceName"
          label="Resource Name"
          placeholder="Resource's Name"
          multiline
          rowsMax={4}
          value={resourceName}
          onChange={handleResource}
        />
       
      </div>
      <div>
       
        <TextField
          id="duration"
          label="Duration"
          placeholder="Project's Duration"
          placeholder="Placeholder"
          multiline
          rowsMax={4}
          value={duration}
          onChange={handleDuration}
          
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
            <MenuItem value={'Trending Up'}>Trending Up</MenuItem>
            <MenuItem value={'Steady'}>Steady</MenuItem>
            <MenuItem value={'Down'}>Down</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        actions.createResource(duration,
          projectName,
          resourceName,
          status);
      }}
      >
  Submit
      </Button>
    </form>
  );
}

ResourceForm.contextTypes = {
  projectName: PropTypes.string,
  resourceName: PropTypes.string,
  duration: PropTypes.number
};

export default injectContext(ResourceForm);
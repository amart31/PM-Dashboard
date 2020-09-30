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
  const [role, setRole] = React.useState('');
  const [status, setStatus] = React.useState('');
  
  const handleProjectName = (event) => {
    setProjectName(event.target.value);
   
  };

  const handleResource = (event) => {
    setResourceName(event.target.value);
   
  };
  const handleRole = (event) => {
    setRole(event.target.value);
   
  };
  
  const handleStatus = (event) => {
    setStatus(event.target.value);
   
  };


  const { store, actions } = useContext(Context);
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div>
        
        <FormControl className={classes.formControl}>

          <InputLabel id="projectNameLabel">Project Name</InputLabel>
          <Select
            labelId='projectNameLabel'
            id="projectName"
            value={projectName}
            onChange={handleProjectName}
          >
            <MenuItem value={'IRS IT PMO'}>IRS IT PMO</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <div>
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
        
        <FormControl className={classes.formControl}>

          <InputLabel id="roleLabel">Role</InputLabel>
          <Select
            labelId='roleLabel'
            id="role"
            value={role}
            onChange={handleRole}
          >
            <MenuItem value={'Officer In Charge'}>Officer In Charge</MenuItem>
            <MenuItem value={'Program Manager'}>Program Manager</MenuItem>
            <MenuItem value={'Deputy Program Manager'}>Deputy Program Manager</MenuItem>
            <MenuItem value={'Technical Delivery Manager'}>Technical Delivery Manager</MenuItem>
            <MenuItem value={'Transition Manager'}>Transition Manager</MenuItem>
            <MenuItem value={'Contacts Administrator'}>Contacts Administrator</MenuItem>
            <MenuItem value={'Internl PMO Lead'}>Internal PMO</MenuItem>
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
            <MenuItem value={'Cleared'}>Cleared</MenuItem>
            <MenuItem value={'Fully Billable'}>Billable</MenuItem>
            <MenuItem value={'Not Billable'}>Not Billable</MenuItem>
            <MenuItem value={'Onboarding'}>Onboarding</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        actions.createResource(
          role,
          resourceName,
          projectName,
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
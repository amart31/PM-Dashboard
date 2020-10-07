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
  const [resourceID, setResourceID] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleProjectName = (event) => {
    setProjectName(event.target.value);
   
  };

  const handleResourceID = (event) => {
    setResourceID(event.target.value);
   
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

    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Add Resource
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
        
        <FormControl className={classes.formControl}>

          <InputLabel id="projectNameLabel">Project Name</InputLabel>
          <Select
            labelId='projectNameLabel'
            id="projectName"
            value={projectName}
            onChange={handleProjectName}
          >
            <MenuItem value={'ECM SIS'}>ECM SIS</MenuItem>
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
            <MenuItem value={'Internl PMO Lead'}>Internal PMO Lead</MenuItem>
            <MenuItem value={'PMO Support'}>PMO Support</MenuItem>
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
            <MenuItem value={'Billable'}>Billable</MenuItem>
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
    </Popover>
    </div>

    <br/>

    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Modify Resource
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
          id="resourceID"
          label="Resource ID"
          placeholder="Resource's ID"
          multiline
          rowsMax={4}
          value={resourceID}
          onChange={handleResourceID}
        />
      </div>
      <br/>
      <FormControl className={classes.formControl}>
          <InputLabel id="projectNameLabel">Project Name</InputLabel>
          <Select
            labelId='projectNameLabel'
            id="projectName"
            value={projectName}
            onChange={handleProjectName}
          >
            <MenuItem value={'ECM SIS'}>ECM SIS</MenuItem>
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
            <MenuItem value={'Internl PMO Lead'}>Internal PMO Lead</MenuItem>
            <MenuItem value={'PMO Support'}>PMO Support</MenuItem>
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
            <MenuItem value={'Billable'}>Billable</MenuItem>
            <MenuItem value={'Not Billable'}>Not Billable</MenuItem>
            <MenuItem value={'Onboarding'}>Onboarding</MenuItem>
          </Select>
        </FormControl>
    
      </div>
      <Button variant="contained" color="primary" onClick={() => {
        actions.updateResources(
          role,
          resourceName,
          projectName,
          status,
          resourceID);
      }}
      >
  Submit
      </Button>
     
    </form>
    </Popover>
    </div>
    
    
    
    </div>
  );
}

ResourceForm.contextTypes = {
  projectName: PropTypes.string,
  resourceName: PropTypes.string,
  role: PropTypes.string,
  status: PropTypes.string,
  resourceID: PropTypes.number
};

export default injectContext(ResourceForm);
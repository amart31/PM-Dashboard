import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
}));

export default function ResourceForm() {
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
        <TextField
          id="status"
          label="Status"
          placeholder="Project Status"
          multiline
          rowsMax={4}
          value={status}
          onChange={handleStatus}
         
        />
       
    
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
}

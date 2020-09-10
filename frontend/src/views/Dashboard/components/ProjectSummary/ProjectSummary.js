import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles ({
  root: {
    width: '100%',
  },
  

});

const ProjectSummary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
  
        
      <Typography variant="h2" component="h2" gutterBottom>
      Project Summary:
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
          Includes all efforts to install a standard enterprise-wide system to subsume the functionality of numerous individual organization’s legacy case management systems. Work includes: Program Management , Release Management , Enterprise Lifecycle Support, Program integration, Technical Integration, Requirements Engineering Support, Configuration and Change Management Support , Organizational Readiness Support , Stakeholder Engagement Support , Engineering and Architecture Support, Enterprise Testing Support, Cybersecurity Support , Enterprise Operations Support, ECM Common Services and COTS Integration and Transition to Support.
        <br/>
      </Typography>
        
       
  
    </div>
  );
}

export default ProjectSummary;
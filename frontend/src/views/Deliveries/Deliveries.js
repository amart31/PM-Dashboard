import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  paper: {
    
    width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },

}));

const Deliveries = () => {
  const classes = useStyles();

  return (


    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>

        <Typography variant="h2" component="h2" gutterBottom>
      Release 1 CY2020 Delivery Options
        </Typography>

       
       
        <Grid  item  xs={12}>
            
            
          <Typography variant="body1"  gutterBottom>
            Looking beyond the Fiscal Year (FY) 2020 delivery, there is a need to re-assess the TE/GE EO Customer Support scope targeted for CY2020 to determine priorities and establish boundaries that will provide an understanding of what can be “committed-to” for CY2020. 
                  
          </Typography>
          <Typography variant="body1" gutterBottom>
            To enable completion of committed scope, we propose Elaboration cutoff by the end of PI7 Iteration 3, 10/23/2020 to allow time to wrap up configuration (code freeze: ~10/30/2020) and EST/508/UAT testing (TBD), in advance of Final ATO (12/11/2020) and deployment (12/14/2020). The following scenarios were explored in determining how much work can be committed to: 
                  
          </Typography>
            
           
        </Grid>

          
       
        <Grid  item xs={12}>
            
            
          <Typography variant="button" display="block" gutterBottom>
      Scenario 1: Maintain the current elaboration velocity (average: ~1 per wk)
            <br/>
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
      -Only a subset of capabilities will be elaborated by Iteration 3 end (i.e., ~6 capabilities, if velocity is ~1 per wk) 
      -There will be a need to descope ~18 capabilities from CY2020 delivery
            <br/>
          </Typography>
            
        </Grid>

       
        



          
       
        <Grid  item xs={12}>
              
            
          <Tooltip title="Most likely scenario given the efficiencies in the new operating model
      " placement="right-end">
        
      
            <Typography variant="button" display="block" gutterBottom>
      Scenario 2: Only commit to capabilities already in-progress of elaboration by October 23rd 
              <br/>
            </Typography>
          </Tooltip>
          <Typography variant="body1" display="block" gutterBottom>
      -Prioritize focus on the 7 capabilities currently in-progress (with an average velocity of ~2 capabilities per week)
            <br/>
      -“Not started” capabilities can be picked up, if in-progress capabilities are fully elaborated before October 23rd 
            <br/>
      -Capabilities elaborated beyond October 23rd will need to be considered for a future PI
          </Typography>
      
            
              
        </Grid>

       
      </Grid>




       
      <Grid  item xs={12}>
             
            
        <Typography variant="button" display="block" gutterBottom>
            Scenario 3: Commit to all open capabilities in Release 1 backlog
          <br/>
        </Typography>
        <Tooltip title="Requires reduce scope to ~30 total points and leverage EFT-2 resources to begin elaboration on Not Started capabilities
            " placement="bottom-right">
          <Typography variant="body1" display="block" gutterBottom>
            -Velocity of ~4 capabilities would need to be elaborated in each Iteration in order to complete all elaboration by October 23rd 
            -Augment team to participate in elaboration and configuration to improve team velocity
            <br/>
          </Typography>
        </Tooltip>
            
            
      </Grid>

       
    </Grid>
       
   
  
    

  );
}

export default Deliveries;


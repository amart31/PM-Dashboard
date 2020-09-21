import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OrgChart() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client Name"
          defaultValue="Client Name"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Task Title"
          defaultValue="Task Name"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client Contract #"
          defaultValue="Contract #"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Engagement #"
          defaultValue="Engagement #"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Contract Type"
          defaultValue="Contract type"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Contract Vehicle"
          defaultValue="Vehicle"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Total Contract POP"
          defaultValue="Contract POP"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client Name"
          defaultValue="Client Name"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Account"
          defaultValue="Account"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Market Code"
          defaultValue="Code"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client Name"
          defaultValue="Name"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="RRF Rating"
          defaultValue="Rating"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="SB Risk Level"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Avg CPAR Rating"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Recompete OTIS #"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Current Period POP"
          defaultValue="Period POP"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Contract Role"
          defaultValue="Role"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Prime (if sub)"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client Name"
          defaultValue="Name"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client CO"
          defaultValue="CO"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Client COR"
          defaultValue="Client COR"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH Contracts"
          defaultValue="BAH Contracts"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH Subcontracts"
          defaultValue="BAH subcontracts"
          variant="outlined"
        />
        
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH OIC"
          defaultValue="BAH OIC"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH VP,Principal"
          defaultValue="Principal"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH PM"
          defaultValue="BAH PM"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH IFS Manager"
          defaultValue="BAH IFS Manager"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="BAH PCO"
          defaultValue="BAH PCO"
          variant="outlined"
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="PMR Presenter"
          defaultValue="PMR Presenter"
          variant="outlined"
        />

        
      </div>
    </form>
  );
}
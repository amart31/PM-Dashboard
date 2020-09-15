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
          id="outlined-required"
          label="Client Name"
          defaultValue="IRS IT PMO"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Task Title"
          defaultValue="ECM"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client Contract #"
          defaultValue="47QTCK18D0004"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Engagement #"
          defaultValue="2035H5-20-F-00200"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Contract Type"
          defaultValue="FFP & LH"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Contract Vehicle"
          defaultValue="Alliant 2"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Total Contract POP"
          defaultValue="4/16/2020-4/15/2025"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client Name"
          defaultValue="IRS IT PMO"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Account"
          defaultValue="TRS"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Market Code"
          defaultValue="IRS"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client Name"
          defaultValue="IRS IT PMO"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="RRF Rating"
          defaultValue="Medium"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="SB Risk Level"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Avg CPAR Rating"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Recompete OTIS #"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Current Period POP"
          defaultValue="4/16/2020-4/11/2021"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Contract Role"
          defaultValue="Prime"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Prime (if sub)"
          defaultValue="N/A"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client Name"
          defaultValue="IRS IT PMO"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client CO"
          defaultValue="Redmon, Iris"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Client COR"
          defaultValue="Huffman, Kyle; Thomas, Mel"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH Contracts"
          defaultValue="Ellison, John"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH Subcontracts"
          defaultValue="Giandelone, Jaci"
          variant="outlined"
        />
        
        <TextField
          required
          id="outlined-required"
          label="BAH OIC"
          defaultValue="Ravi, Ram"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH VP,Principal"
          defaultValue="Hutchison, Jon; Kopparapu, Chak"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH PM"
          defaultValue="Hutchison, Jon"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH IFS Manager"
          defaultValue="Piner, Earl"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="BAH PCO"
          defaultValue="Ra, Sonia; Tu, Helen"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="PMR Presenter"
          defaultValue="Hutchison, Jon"
          variant="outlined"
        />

        
      </div>
    </form>
  );
}
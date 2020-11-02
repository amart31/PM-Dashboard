import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { 
  RisksForm,
  RisksTable,
  ModifyRisksForm,
  RisksChart
  
} from './components';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  h3: {
    margin: 10,
  },
 
  table: {
    minWidth: 650,
  },
}));



export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
    <Typography className={classes.h3} variant="h3" gutterBottom>
        Risks
      </Typography>
   

      <br/>
      <RisksChart />

    <br/>
    <RisksTable />

    <Divider />
    <br/>


    <Grid container  justify="center" className={classes.root} spacing={2}>
      <Grid item xs={6} >
        
      <RisksForm />
      </Grid>

      <Grid item xs={6} >
        
      <ModifyRisksForm />
      </Grid>
      </Grid>

 

    <br/>
    <Typography className={classes.h3} variant="h5" gutterBottom>
        Status Key:
      </Typography>

    <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      
      <ListItemText primary="G: Scope and Schedule on plan" />
    </ListItem>
    <ListItem button>
     
      <ListItemText primary="Y: Scope and Schedule with few challenges" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="O: Scope and Schedule with some challenges" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="R: Scope and Schedule risk, major issues" />
    </ListItem>
  </List>



    </div>
  );
}
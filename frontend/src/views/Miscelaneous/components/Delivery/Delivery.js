import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, 
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  TextField,
  ListItemText,
  IconButton
 } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

function Task({ task, index, completeTask, removeTask }) {
  return (

      <ListItem
      divider={index < task.length - 1}
      key={task.index}
    >
      
      <ListItemText
      style={{textDecoration: task.completed ? 'line-through' : ' '}}
        primary={task.title}
      />
      <IconButton
        edge="end"
        style={{background: 'primary' }}
        size="small"
        onClick={() => completeTask(index)}
      >
        <DoneIcon />
      </IconButton>
      <IconButton
        edge="end"
        size="small"
        style={{background: 'secondary' }}
        onClick={() => removeTask(index)}
      >
        <ClearIcon />
      </IconButton>
    </ListItem>
  );
}

function CreateTask({ addTask}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;

      addTask(value);
      setValue('');
  }
  return (

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>

      <TextField
      ype="text" value={value}
      onChange={e => setValue(e.target.value)}
      id="standard-full-width"
      label="New Task"
      style={{ margin: 2 }}
      placeholder="Task"
      helperText="Add a new task to complete"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />

          
      </form>
  );
}



export function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
      
      {
          title: 'Only a subset of capabilities will be elaborated by Iteration 3 end (i.e., ~6 capabilities, if velocity is ~1 per wk)',
          completed: false
      },
      {
        title: 'There will be a need to descope ~18 capabilities from CY2020 delivery',
        completed: false
    }
      
  ]);

  const [tasks2, setTasks2] = useState([
      
    {
        title: 'Prioritize focus on the 7 capabilities currently in-progress (with an average velocity of ~2 capabilities per week)',
        completed: false
    },
    {
      title: '“Not started” capabilities can be picked up, if in-progress capabilities are fully elaborated before October 23rd ',
      completed: false
  },
  {
    title: 'Capabilities elaborated beyond October 23rd will need to be considered for a future PI',
    completed: false
},
    
]);

const [tasks3, setTasks3] = useState([
      
  {
      title: 'Velocity of ~4 capabilities would need to be elaborated in each Iteration in order to complete all elaboration by October 23rd ',
      completed: false
  },
  {
    title: 'Augment team to participate in elaboration and configuration to improve team velocity',
    completed: false
},
  
]);


  useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });

  const addTask = title => {
      const newTasks = [...tasks, {title, completed: false}];
      setTasks(newTasks);
  };

  const completeTask = index => {
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
  };

  const removeTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
  };

  return (
    <div>

      <Card
      style={{height: '100%' }}
      
    >
      <CardHeader
        title="Scenario 1: Maintain the current elaboration velocity (average: ~1 per wk)"
      />
      <Divider />
      <CardContent>
        <List>
          {tasks.map((task, index) => (
              <Task
                  task={task}
                  index={index}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  key={index}
                  />
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
      <CreateTask addTask={addTask} />
      </CardActions>
    </Card>

    <br/>

    <Card
    style={{height: '100%' }}
    
  >
    <CardHeader
      title="Scenario 2: Only commit to capabilities already in-progress of elaboration by October 23rd"
    />
    <Divider />
    <CardContent>
      <List>
        {tasks2.map((task, index) => (
            <Task
                task={task}
                index={index}
                completeTask={completeTask}
                removeTask={removeTask}
                key={index}
                />
        ))}
      </List>
    </CardContent>
    <Divider />
    <CardActions>
    <CreateTask addTask={addTask} />
    </CardActions>
  </Card>
  <br/>

  <Card
  style={{height: '100%' }}
  
>
  <CardHeader
    title="Scenario 3: Commit to all open capabilities in Release 1 backlog"
  />
  <Divider />
  <CardContent>
    <List>
      {tasks3.map((task, index) => (
          <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={index}
              />
      ))}
    </List>
  </CardContent>
  <Divider />
  <CardActions>
  <CreateTask addTask={addTask} />
  </CardActions>
</Card>
</div>
  );
}


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

const Delivery = () => {
  const classes = useStyles();

  return (


    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>

        <Typography variant="h2" component="h2" gutterBottom>
      Release 1 CY2020 Delivery Options
        </Typography>

       </Grid>
       
        <Grid  item  xs={12}>
            
            
          <Typography variant="body1"  gutterBottom>
            Looking beyond the Fiscal Year (FY) 2020 delivery, there is a need to re-assess the TE/GE EO Customer Support scope targeted for CY2020 to determine priorities and establish boundaries that will provide an understanding of what can be “committed-to” for CY2020. 
                  
          </Typography>
          <Typography variant="body1" gutterBottom>
            To enable completion of committed scope, we propose Elaboration cutoff by the end of PI7 Iteration 3, 10/23/2020 to allow time to wrap up configuration (code freeze: ~10/30/2020) and EST/508/UAT testing (TBD), in advance of Final ATO (12/11/2020) and deployment (12/14/2020). The following scenarios were explored in determining how much work can be committed to: 
                  
          </Typography>
            
           
        </Grid>

          
       
        <Grid  item xs={12}>
            
         <Todo />
            
        </Grid>

        </Grid>
       
        



          
       
        
  
    

  );
}

export default Delivery;


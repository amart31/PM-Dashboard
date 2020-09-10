import React, { useState, useEffect } from 'react';
import {
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

function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        
        {
            title: 'September delivery is on-track with implementation complete for 25 out of 28 user stories (1 stretch goal and 2 pushed out to next PI due to RPA dependency)',
            completed: false
        },
        {
            title: 'Production deployment targeted for 8/31. Scheduling a pre-deployment walkthrough with Pega on 8/28 to ensure environment readiness',
            completed: false
        },
        {
            title: 'Supported troubleshooting performance issues in DEV, DSIT, and SAT environments',
            completed: false
        },
        {
            title: 'Pega RDA was selected as the RPA tool for R1. Software installed on dev team IRS laptops. Team began implementation',
            completed: false
        },
        {
            title: 'Integrated Single Sign On (SSO) and SiteMinder integration with Pega platform in lower environments',
            completed: false
        },
        {
            title: 'Supported developing technical roadmap strategy for ECM platform',
            completed: false
        },
        {
            title: 'Reviewed technical debt candidates with ES leads for upcoming PI 7 and the approach to flow through the Portfolio process',
            completed: false
        },
        {
            title: 'Continued to develop System Security Plan in support of platform ATO',
            completed: false
        },
        {
            title: 'Continued to conduct bi-weekly demos to the UAT, TEGE, and ECMO stakeholders',
            completed: false
        },
        {
            title: 'Support PI 7 objectives planning and implement a metrics-based approach for capacity planning',
            completed: false
        }
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

        <Card
        style={{height: '100%' }}
        
      >
        <CardHeader
          title="Technical"
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
    );
}

export default Todo;

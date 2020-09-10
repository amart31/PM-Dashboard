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
            title: 'Deliverables table is validated by client for the FFP portion to provide description and details on each deliverable are being worked out with the clients. We expect to have this nailed down by 8/31.',
            completed: false
        },
        {
            title: 'Resources aligned to LCAT and their experience approved by clients for the LH CLINs. This is now an ongoing activity as part of weekly onboarding and MSR.',
            completed: false
        },
        {
            title: 'Continuing the assessment of ECM Release 1 scope for CY (Dec) deployment – see supporting slides on release progress for FY and CY deployments.',
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
          title="Scope Management"
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

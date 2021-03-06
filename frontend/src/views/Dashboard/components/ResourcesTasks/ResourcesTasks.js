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
            title: 'Submitted 164 clearance packages; received 125 MBI Letters',
            completed: false
        },
        {
            title: 'Submitted 26 Pega SMEs for clearance; 17 cleared. Of the 9 Pega resources targeted for R1 PFT teams, all of them now have GFEs and access.',
            completed: false
        },
        {
            title: 'We continue to work with the COR and program leadership to expedite provisioning of laptops and MBI clearances for Pega SMEs.',
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
          title="Resources"
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

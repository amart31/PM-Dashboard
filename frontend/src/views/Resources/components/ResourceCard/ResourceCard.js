import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import injectContext from '../../../../store/appContext';
import { Context } from '../../../../store/appContext';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme =>({
  root: {
    maxWidth: 300,
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ResourceCard =() => {
  const classes = useStyles();


  const { store, actions } = useContext(Context);
  return (
    <div>
      
      {store.projects.map((item, index) => {
        return (
         
          


          <Card className={classes.root} key={index}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.projectName}
              </Typography>
              <Typography variant="h5" component="h2">
                {item.projectName}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               Project ID# {item.id}
              </Typography>
              <Typography variant="body2" component="p">
            
                Status: {item.status}
                <br/>
                Duration: {item.duration}
                <br/>
                Last Updated: {item.updatedDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
                      
                 
       
        );
      })}
     
    </div>
    
  );
}

ResourceCard.contextTypes = {
  items: PropTypes.array
}

export default injectContext(ResourceCard);



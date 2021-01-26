import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function Users() {
  const classes = useStyles();
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(URL);
    setUsers(response.data);
  };

  const userList = users.map((item) => {
    return (
      <ListItem alignItems="flex-start" key={item.id}>
        <ListItemAvatar>
          <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.inline}
                color="textPrimary"
              >
                {item.name}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
              {item.company.catchPhrase}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    )
  })

  return (
    <List className={classes.root}>
      {userList}
      <Divider />
    </List>
  );
}
export default Users;

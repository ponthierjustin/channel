import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      position: 'left',
      fontFamily: 'Ramabhadra',
      color: '#eeeeee'
    },
  }));

const Nav = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CHANNEL
          </Typography>
          <Button color="inherit">SEARCH</Button>
        </Toolbar>
     
    </div>
  );
};

export default Nav;

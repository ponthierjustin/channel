import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Ramabhadra",
    color: "#eeeeee",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          CHANNEL
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
          label="Search"
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
        </form>
      </Toolbar>
    </div>
  );
};

export default Nav;

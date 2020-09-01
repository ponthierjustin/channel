import React from "react";
import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Ramabhadra",
    color: "#eeeeee",
    textAlign: "left",
  },
  paperRight: {
    backgroundColor: "#393e46",
    fontFamily: "Ramabhadra",
    color: "#eeeeee",
    textAlign: "center",
  },
  paperLeft: {
    backgroundColor: "#eeeeee",
    fontFamily: "Ramabhadra",
    color: "#393e46",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.paper} variant="h1">
            CHANNEL
          </Typography>
        </Grid>
        <Grid className={classes.paperLeft} item xs={7} sm={7}>
          <Typography >
            FIND YOUR NEXT FAVORITE ARTIST
          </Typography>
        </Grid>
        <Grid className={classes.paperRight} item xs={5} sm={5}>
          <Typography >
            THIS IS WERE i WILL DISPLAY CHARTS
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

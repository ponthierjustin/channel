import React from "react";
import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import concert from "../images/unnamed.png";

const useStyles = makeStyles((theme) => ({
  topPaper: {
    backgroundColor: "#222831",
    height: theme.spacing(25),
  },
  paperText: {
    fontFamily: "Ramabhadra",
    color: "#eeeeee",
    textAlign: "center",
    height: theme.spacing(10),
    fontSize: "5.5rem",
  },
  middlePaper: {
    backgroundColor: "#eeeeee",
    alignItems: 'stretch'
     /* height: theme.spacing(70),  */
  },
  paperLeft: {
    backgroundColor: "#eeeeee",
    fontFamily: "Ramabhadra",
    color: "#393e46",
    textAlign: "center",
  },
  paperRight: {
    backgroundColor: "#393e46",
    fontFamily: "Ramabhadra",
    color: "#eeeeee",
    textAlign: "center",
    height: theme.spacing(70),
  },
  img: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Grid container spacing={0}>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.topPaper} elevation={0}></Paper>
          <Typography xs={6} className={classes.paperText} variant="h1">
            CHANNEL
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6}></Grid>
        <Grid className={classes.middlePaper} item xs={12} sm={5}>
          <Typography className={classes.paperLeft}>
            FIND YOUR NEXT FAVORITE ARTIST
          </Typography>
          <img className={classes.img} alt="concert" src={concert} />
        </Grid>
        <Grid className={classes.paperRight} item xs={12} sm={7}>
          <Typography>THIS IS WERE i WILL DISPLAY CHARTS</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

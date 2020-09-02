import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import API from "../utils/API";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paperText: {
    fontFamily: "Ramabhadra",
    color: "#222831",
    textAlign: "center",
  },
  paperLeft: {
    backgroundColor: "#eeeeee",
    fontFamily: "Ramabhadra",
    color: "#222831",
    textAlign: "center",
  },
  paperRight: {
    backgroundColor: "#eeeeee",
    fontFamily: "Ramabhadra",
    color: "#222831",
  },
  topRightText: {
    color: "#222831",
    textAlign: "center",
    fontFamily: "Ramabhadra",
  },
}));

const Home = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    API.getChart()
      .then((response) => {
        setCharts(response.data.tracks.data);
        console.log(response.data.tracks.data);
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Grid container spacing={0}>
        {/*     <Grid item xs={12} sm={12}>
          <Typography className={classes.paperText} variant="h1">
            CHANNEL
          </Typography>
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <Box p={0} m={5}>
            <Typography variant="h3" className={classes.paperLeft}>
              EXPLORE TODAY'S TOP TRACKS AND YOUR FAVORITE ARTIST
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexWrap="wrap" flexDirection="row">
            {charts.map((chart) => (
              <div>
                <Box>
                  <img alt="cover" src={chart.album.cover_medium} />
                  {/*      <Typography className={classes.topRightText}>
                    {chart.title}
                  </Typography>
                  <Typography className={classes.topRightText}>
                    {chart.artist.name}
                  </Typography> */}
                </Box>
              </div>
            ))}{" "}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexWrap="wrap" flexDirection="row">
            {charts.map((chart) => (
              <div>
                <Box>
                  <img alt="cover" src={chart.album.cover_medium} />
                  {/*      <Typography className={classes.topRightText}>
                    {chart.title}
                  </Typography>
                  <Typography className={classes.topRightText}>
                    {chart.artist.name}
                  </Typography> */}
                </Box>
              </div>
            ))}{" "}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

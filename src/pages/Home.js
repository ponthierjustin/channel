import React, { useEffect, useState } from "react";
import {useSpring, animated} from 'react-spring'

import Nav from "../components/Nav";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";

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
  audio: {
    /* width: '600px',  */
    boxShadow: "5px 5px 20px rgba(0,0, 0, 0.4)",
    borderRadius: "100px",
    /* transform: "scale(1.00)", */
  },
  shadow: {
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034),  0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),  0 100px 80px rgba(0, 0, 0, 0.12) ",
    minHeight: "200px",
    /* width: '50vw', */
    borderRadius: "5px",
  },
}));
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const Home = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
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
        <Grid item xs={12} sm={12}>
          <Typography className={classes.paperText} variant="h2">
            CHANNEL
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box p={0} m={5}>
            <Typography variant="h3" className={classes.paperLeft}>
              EXPLORE TOP ARTIST AND YOUR FAVORITES
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexWrap="wrap" flexDirection="row">
            {charts.map((chart) => (
              <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}>
                <Box p={0} m={2}>
                  {/*        <a
                    href={chart.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    
                  </a> */}
                  <animated.img
                    
                    className={classes.shadow}
                    alt="cover"
                    src={chart.album.cover_medium}
                  />
                  <Typography className={classes.topRightText}>
                    {chart.title} 
                  </Typography>
                  <Typography className={classes.topRightText}>
                    {chart.artist.name}
                  </Typography>
                  <Typography className={classes.topRightText}>
                    <audio
                      title="HELLO"
                      className={classes.audio}
                      controls
                      src={chart.preview}
                    ></audio>
                  </Typography>
                </Box>
              </animated.div>
            ))}{" "}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

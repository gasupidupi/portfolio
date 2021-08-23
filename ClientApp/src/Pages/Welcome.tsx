import * as React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, Switch, Route, BrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio";


const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: "#282c34",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
});

export const Welcome: React.FC = () => {

  const classes = useStyles();
  const history = useHistory();

  function startClick() {
    history.push('/Portfolio');
  }
  

  return (
    <>
      <Box className={classes.root}>
        <body className="Welcome-body">
          <Grid>
            <Grid item xs="auto">
              <Typography variant="h1">Portfolio</Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography variant="h5">by Gabriel</Typography>
            </Grid>
            <Grid item xs="auto">
              <Box m={1}>
                <Button variant="contained" color="primary" onClick={startClick}>Start</Button>
              </Box>
            </Grid>
          </Grid>
        </body>
      </Box>
    </>
  )
}

export default Welcome;

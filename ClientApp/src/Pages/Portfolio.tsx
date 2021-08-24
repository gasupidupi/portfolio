import * as React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { IconButton, Typography, Button, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, SvgIcon, Avatar, CardMedia, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, Switch, Route } from "react-router-dom";
import Fader from "../Components/Fader";
import Personal from "../Components/Personal";
import Professional from "../Components/Professional";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#282c34",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  center: {
    textAlign: 'center',
  },
  arrow: {
    position: 'relative',
    top: '50%',
    textAlign: 'center',
  },
  mainBox: {
    component: {
      padding: '1em',
      margin: '1em',
      display: 'block',
    },
  },
  avatar: {
    width: '80%',
    height: '90%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export const Portfolio: React.FC = () => {

  const classes = useStyles();
  const history = useHistory();
  const text = ["Hi", "Will you be my future employer?", "Let's find out!"]
  const [visible, setVisible] = useState(false);

  function createData(title: string, information: string) {
    return { title, information };
  }

  function onDone() {
    setVisible(true);
  }

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.center}>
          <Fader text={text} onDone={onDone} />
        </Box>
        {visible &&
        <>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Box className={classes.arrow}>
                  <Button>&#9664;</Button>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Personal />
                <Professional />
              </Grid>
              <Grid item xs={1}>
                <Box className={classes.arrow}>
                  <Button>&#9654;</Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
        }
      </Box>
    </>
  )
}

export default Portfolio;
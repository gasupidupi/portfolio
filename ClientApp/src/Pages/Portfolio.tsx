import * as React from "react";
import '@fontsource/roboto';
import { Button, Grid, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Fader from "../Components/Fader";
import Personal from "../Components/Personal";
import Professional from "../Components/Professional";
import Schools from "../Components/Schools";
import Languages from "../Components/Languages";
import Skills from "../Components/Skills";
import Character from "../Components/Character";


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
  //const text = ["Hi", "Will you be my future employer?", "Let's find out!"]
  const text = ["Hi Marielle", "Did you seriously think I'd ..", "show you the page without a personal message?", "Pathetic"]
  const [visible, setVisible] = useState(false);
  const [chapter, setChapter] = useState(1);

  function onDone() {
    setVisible(true);
  }

  function nextChapter() {
    setChapter(chapter + 1);
  }

  function previousChapter() {
    setChapter(chapter - 1);
  }

  return (
    <>
      <Box className={classes.root}>
        <Fader text={text} onDone={onDone} />
        {visible &&
        <>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                {chapter > 1 &&
                  <Box className={classes.arrow}>
                    <Button onClick={previousChapter}>&#9664;</Button>
                  </Box>
                }
              </Grid>
              <Grid item xs={9}>
                {chapter === 1 &&
                  <Personal />
                }
                {chapter === 2 &&
                  <Professional />
                }
                {chapter === 3 &&
                  <Schools />
                }
                {chapter === 4 &&
                  <Languages />
                }
                {chapter === 5 &&
                  <Skills />
                }
                {chapter === 6 &&
                  <Character />
                }
              </Grid>
              <Grid item xs={2}>
                <Box className={classes.arrow}>
                  {chapter < 6 &&
                    <Button onClick={nextChapter}>&#9654;</Button>
                  }
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
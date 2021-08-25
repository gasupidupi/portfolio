import * as React from "react";
import '@fontsource/roboto';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
        <Grid>
          <Grid item xs="auto">
            <Typography variant="h1">Portfolio</Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h5">by Gabriel Schafflützel</Typography>
          </Grid>
          <Grid item xs="auto">
            <Box m={1}>
              <Button onClick={startClick}>Start</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Welcome;

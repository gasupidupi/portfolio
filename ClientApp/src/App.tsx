import logo from './logo.svg';
import './App.tsx';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              <Button variant="contained" color="primary">Enter</Button>
            </Box>
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;

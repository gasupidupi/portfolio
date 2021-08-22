import * as React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, Switch, Route, BrowserRouter } from "react-router-dom";
import { Portfolio } from "./Pages/Portfolio";
import { Welcome } from "./Pages/Welcome";


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

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;

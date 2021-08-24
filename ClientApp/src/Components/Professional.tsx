import * as React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { IconButton, Typography, Button, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, SvgIcon, Avatar, CardMedia, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, Switch, Route } from "react-router-dom";
import Fader from "../Components/Fader";
import Gabriel from '../Assets/Gabriel.png';


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

export const Professional: React.FC = () => {

    const classes = useStyles();
    const history = useHistory();

    function createData(title: string, information: string) {
        return { title, information };
    }
  
  const rows = [
    createData('Aug 1, 2019 – Jul 31, .2021', 'Internship as «Informatiker EFZ», specialization: Application development Balzano Informatik AG'),
    createData('Aug 1, .2017 – Jul 31,.2021', 'Internship as «Informatiker EFZ», specialization: Application development WISS Wirtschaftsinformatikschule Zürich'),
  ];

  return (
    <>
        <Grid container spacing={4}>  
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.center}>Professional education</Typography>
                <br />
                <TableContainer>
                    <Table aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                            {row.title}
                            </TableCell>
                            <TableCell align="right">{row.information}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.center}>Apprenticeship-Thesis (IPA)</Typography>
                <br />
                <Typography variant="body1">Title: Implement a Dicom Client Context Class for Unit Testing</Typography>
            </Grid>
        </Grid>
    </>
  )
}

export default Professional;
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

export const Personal: React.FC = () => {

    const classes = useStyles();
    const history = useHistory();

    function createData(title: string, information: string) {
        return { title, information };
    }

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 900) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    // create an event listener
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

  
  const rows = [
    createData('Address', '-'),
    createData('Telephone', '+31 65 766 33 38'),
    createData('E-Mail', 'schaffluetzel.gabriel@gmail.com'),
    createData('Birthday', 'Oct 19, 2001'),
    createData('Hometown', 'Neckertal SG'),
  ];

  return (
    <>
        <Grid container spacing={4}>  
            <Grid item xs={!isMobile ? 8 : 12}>
                <Typography variant="h4" className={classes.center}>Personal data</Typography>
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
            {!isMobile &&
                <Grid item xs={4}>
                    <Avatar src={Gabriel} alt="Gabriel" className={classes.avatar}/>
                </Grid>
            }
        </Grid>
    </>
  )
}

export default Personal;
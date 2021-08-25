import * as React from "react";
import '@fontsource/roboto';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Gabriel from '../Assets/Gabriel.png';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#282c34",
        color: 'white',
      },
    center: {
        textAlign: 'center',
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

    function createData(title: string, information: string) {
        return { title, information };
    }

    const [isMobile, setIsMobile] = useState(false);

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 900) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    // create an event listener
    React.useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
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
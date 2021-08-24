import * as React from "react";
import '@fontsource/roboto';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#282c34",
        color: 'white',
        },
    center: {
        textAlign: 'center',
    },
});

export const Languages: React.FC = () => {

    const classes = useStyles();

    function createData(title: string, information: string) {
        return { title, information };
    }
  
  const rows = [
    createData('German', 'Mother tongue'),
    createData('English', 'Fluently'),
    createData('French', 'Moderate'),
  ];

  return (
    <>
        <Grid container spacing={4}>  
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.center}>Languages</Typography>
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
        </Grid>
    </>
  )
}

export default Languages;
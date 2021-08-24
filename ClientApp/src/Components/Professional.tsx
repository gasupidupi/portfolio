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

export const Professional: React.FC = () => {

    const classes = useStyles();

    function createData(title: string, information: string) {
        return { title, information };
    }
  
  const rows = [
    createData('Aug 1, 2019 – Jul 31, 2021', 'Internship as «Informatiker EFZ», specialization: Application development at Balzano Informatik AG'),
    createData('Aug 1, 2017 – Jul 31, 2021', 'Internship as «Informatiker EFZ», specialization: Application development at WISS Wirtschaftsinformatikschule Zürich'),
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
                <Typography variant="body1" className={classes.center}>Title: Implement a Dicom Client Context Class for Unit Testing</Typography>
            </Grid>
        </Grid>
    </>
  )
}

export default Professional;
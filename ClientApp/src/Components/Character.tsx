import * as React from "react";
import '@fontsource/roboto';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#282c34",
    color: 'white',
  },
  center: {
    textAlign: 'center',
  },
});

export const Character: React.FC = () => {

    const classes = useStyles();

    function createData(title: string, information: string) {
        return { title, information };
    }
  
  const rows = [
    createData('Creativity', 'Drawing'),
    createData('Patience and endurance', 'Piano and fitness-training'),
    createData('Curiosity', 'Reading'),
    createData('Friendliness', 'Hanging out with friends'),
  ];

  return (
    <>
        <Grid container spacing={4}>  
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.center}>Positive characteristics and use in spare time</Typography>
                <br />
                <TableContainer>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Positive characteristic</TableCell>
                            <TableCell align="right" component="th">Use in spare time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell scope="row">
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

export default Character;
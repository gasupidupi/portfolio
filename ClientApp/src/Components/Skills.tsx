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

export const Skills: React.FC = () => {

    const classes = useStyles();

    function createData(title: string, information: string) {
        return { title, information };
    }
  
  const rows = [
    createData('C#', 'Internship, a lot'),
    createData('Dicom', 'Internship, a lot'),
    createData('React', 'Internship, a lot'),
    createData('Python', 'Internship, a lot'),
    createData('HTML/JS/TS/CSS', 'Internship and school, moderate'),
    createData('SQL', 'Internship and school, moderate'),
    createData('Docker', 'Internship, moderate'),
    createData('Java', 'School, moderate'),
    createData('C++', 'School, moderate'),
  ];

  return (
    <>
        <Grid container spacing={4}>  
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.center}>IT skills</Typography>
                <br />
                <TableContainer>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Technology</TableCell>
                            <TableCell align="right" component="th">Experience</TableCell>
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

export default Skills;
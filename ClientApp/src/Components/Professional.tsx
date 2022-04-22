import * as React from "react";
import '@fontsource/roboto';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Icon, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Download from '../Assets/Download.png';
import IPA from '../Assets/IPA.pdf';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#282c34",
        color: 'white',
      },
    center: {
        textAlign: 'center',
    },
    centerInline: {
        display: 'inline',
    },
    downloadButton: {
        paddingRight: '0em !important',
        marginLeft: '1em',
    },
});

export const Professional: React.FC = () => {

    const classes = useStyles();

    function createData(title: string, information: string) {
        return { title, information };
    }

    const DownloadIcon = (
        <Icon>
          <img alt="edit" src={Download} />
        </Icon>
      );
    
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = IPA;
        link.href = IPA;
        link.click();
    };
  
    const rows = [
        createData('Aug 1, 2019 – Jul 31, 2021', 'Apprenticeship as «Informatiker EFZ», specialization: Application development at Balzano Informatik AG'),
        createData('Aug 1, 2017 – Jul 31, 2021', 'Apprenticeship as «Informatiker EFZ», specialization: Application development at WISS Wirtschaftsinformatikschule Zürich'),
        createData('Dec 6, 2021 – now', 'Language Data Analyst at TransPerfect'),
    ];

    return (
        <>
            <Grid container spacing={4}>  
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.center}>Professional education/experience</Typography>
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
                    <Box className={classes.center}>
                        <Typography variant="body1" className={classes.centerInline}>Title: Implement a Dicom Client Context Class for Unit Testing</Typography>
                        <Button onClick={onDownload} className={classes.downloadButton} startIcon={DownloadIcon} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Professional;
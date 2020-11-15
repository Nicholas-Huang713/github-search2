import React from 'react'
import NavBar from '../NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      padding: '20px'
    },
    
  });

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <>
            <NavBar />
            <Grid 
                container
                align="center"
                justify="center"
                className={classes.root}
            >
                <Grid item>{children}</Grid>
            </Grid>
        </>
    )
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Portfolio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="sites/bupa/index.html" target="_blank" title="Link to Bupa project"><img src="project-01.jpg" alt="Home of Bupa project" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="http://www.vocescatolicas.cl" target="_blank" rel="noreferrer" title="Link external to Voces Catolicas project"><img src="imag/project-02.jpg" alt="Home of Voces católicas project" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="sites/webstudios/index.html" target="_blank" title="Link to Webstudio project"><img src="imag/project-03.jpg" alt="Home of Webstudios project" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="http://piedras-blancas.cl" target="_blank" rel="noreferrer" title="Link external to piedras blancas project"><img src="imag/project-04.jpg" alt="Home of Piedras blancas project" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="imag/wireframes/wireframes_circular_3144.pdf" target="_blank" title="Link to wireframe of Codelco Circular in PFD"><img src="imag/project-05.jpg" alt="Wireframes home of Codelco Circular" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="imag/wireframes/wireframes_uta.pdf" target="_blank" title="Link to wireframe University of UTA in PFD"><img src="imag/project-09.jpg" alt="Wireframe University of UTA" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="sites/bec/index.html" target="_blank" title="Link to mailing of Edward Banck"><img src="imag/project-07.jpg" alt="Mailing of Edward Banck" /></a>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <a href="sites/bchile/index.html" target="_blank" rel="noreferrer" title="Link to mailing of Bank of Chile"><img src="imag/project-08.jpg" alt="Mailing of Bank of Chile" /></a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

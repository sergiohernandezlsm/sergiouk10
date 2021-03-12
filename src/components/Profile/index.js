import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Profile from '../../services/profile.json';
import profilePicture from '../../assets/images/sergio.png';
import css from './Profile.module.scss';

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
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4}>
          <img className={css.profilePic} src={profilePicture} alt="Sergio Hernandez" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2>Personal Profile</h2>
          <div className={css.colorLine}></div>
          <Paper className={classes.paper}>{Profile.description}</Paper>
          <div><a href="downloads/cv-sergio.pdf" target="_blank" title="Download sergios CV">Download CV</a></div>
        </Grid>
      </Grid>
    </div>
  );
};

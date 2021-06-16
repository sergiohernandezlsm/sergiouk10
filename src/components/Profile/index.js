import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  title: {
    margin: '20px',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Hidden smDown>
        <Grid item xs={12} sm={4}>
          <img className={css.profilePic} src={profilePicture} alt="Sergio Hernandez" />
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={8}>
          <Typography variant="h4" className={classes.title}>
            Personal Profile
          </Typography>
          <div className={css.colorLine}></div>
          {Profile.description}
          {/* <div><a href="downloads/cv-sergio.pdf" target="_blank" title="Download sergios CV">Download CV</a></div> */}
        </Grid>
      </Grid>
    </div>
  );
};

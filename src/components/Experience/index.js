import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import FolderIcon from '@material-ui/icons/Folder';
import css from './Experience.module.scss';
import experiences from '../../services/experience.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    margin: '40px 0',
  },
  demo: {
    backgroundColor: theme.palette.background.default,
    paddingLeft: '8px',
  },
  title: {
    margin: '20px',
  },
}));

export default function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" className={classes.title}>
              Skills Profile
            </Typography>
            <div className={css.colorLine}></div>
            <List className={css.listStyle}>
              {experiences.content.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText primary={item} className={classes.demo}/>
                  </ListItem>
                )
              })}
              </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

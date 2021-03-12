import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Experience() {
  const classes = useStyles();
  const data = experiences.map(experience => {
    return (
      <div className={classes.root} key={`item-${experience.title}`}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" className={classes.title}>
              {experience.title}
            </Typography>
            <div className={css.colorLine}></div>
            <div className={classes.demo}>
              {experience.content.map((item, index) => {
                return (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>
                        {/* <FolderIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  </List>
                )
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  })
  return data
}

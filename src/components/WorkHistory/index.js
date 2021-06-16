import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import FolderIcon from '@material-ui/icons/Folder';
import css from './WorkHistory.module.scss';
import workHistory from '../../services/workHistory.json'


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    height: 140,
  },
  title: {
    margin: '20px',
  },
});

export default function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className={classes.title}>
            Work History
          </Typography>
          <div className={css.colorLine}></div>
          <div className={classes.demo}>
            {workHistory.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardContent>
                          <Typography variant="subtitle3" component="p">
                            {item.year}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="h3">
                            {item.company}
                          </Typography>
                          <Typography variant="body1" component="p">
                            {item.role}
                          </Typography>
                          <Typography variant="body1" color="textSecondary" component="p">
                            {item.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </ListItem>
                </List>

              )
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

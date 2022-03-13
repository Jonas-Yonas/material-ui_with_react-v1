import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

import epp from '../assets/epp.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(4),
  },
  container: {
    paddingTop: theme.spacing(10),
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={epp} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            similique odit placeat facilis ut, magni minima commodi aspernatur
            autem reprehenderit consequuntur ex harum asperiores odio esse? Sed
            saepe rerum illo. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Deleniti, similique odit placeat facilis ut, magni
            minima commodi aspernatur autem reprehenderit consequuntur ex harum
            asperiores odio esse? Sed saepe rerum illo.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

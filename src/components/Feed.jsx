import { Container, makeStyles, Typography } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography>Post Page</Typography>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;

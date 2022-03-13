import { Container, makeStyles } from '@material-ui/core';
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
      <h1>Post Page</h1>

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

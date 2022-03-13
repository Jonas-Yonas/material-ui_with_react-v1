import {
  Avatar,
  Container,
  Divider,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@mui/material';

import celebrity01 from '../assets/celebrities01.png';
import jeff from '../assets/jeff-bezos.png';
import mark from '../assets/mark-zuckerberg.png';
import rachel from '../assets/rachel.png';
import sarah from '../assets/sarah.png';
import raj from '../assets/kiran-raj.png';
import ImageSource from './ImageSource';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    position: 'fixed',
    width: '16%',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
  avatarGroup: {
    float: 'left',
    paddingBottom: '16px',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>

        <AvatarGroup max={5} className={classes.avatarGroup}>
          <Avatar alt="Hellen" src={celebrity01} />
          <Avatar alt="Mark" src={mark} />
          <Avatar alt="Rachel" src={rachel} />
          <Avatar alt="Sarah" src={sarah} />
          <Avatar alt="Jeff Bezos" src={jeff} />
          <Avatar alt="Raj" src={raj} />
        </AvatarGroup>

        <ImageSource />

        <Typography
          className={classes.title}
          style={{ marginTop: 16 }}
          gutterBottom
        >
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Tech
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Life
        </Link>

        <Divider flexItem style={{ marginBottom: 6 }} />

        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
      </Container>
    </>
  );
};

export default Rightbar;

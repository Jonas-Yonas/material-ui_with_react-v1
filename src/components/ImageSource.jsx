import React from 'react';

import {
  ImageList,
  ImageListItem,
  makeStyles,
  Box,
  Typography,
} from '@material-ui/core';

import { imageSource } from '../image-src';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
}));

const ImageSource = () => {
  console.log(imageSource);

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>Gallery</Typography>
      <Box
        sx={{
          width: 300,
          height: 350,
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <ImageList rowHeight={90} variant="woven" cols={2} gap={8}>
          {imageSource.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default ImageSource;

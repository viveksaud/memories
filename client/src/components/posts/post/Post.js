import React from 'react'
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();
  return (
    <h2 className={classes.something}>Post</h2>
  )
}

export default Post
import React from 'react';
import classes from './Image.module.scss';

const Image = ({
  className, src, alt
}) => (
  <img alt={alt} src={src} className={classes[className]}/>
);

export default Image;
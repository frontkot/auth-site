import React from 'react';
import classes from './SectionImg.module.scss';
import Image from '../Image/Image.component';

const SectionImg = ({
  src
}) => {
  return (
    <div className={classes}>
      <Image className={classes} src={src} alt='section-img'/>
    </div>
  );
};

export default SectionImg;
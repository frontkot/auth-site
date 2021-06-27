import React from 'react';
import classes from './SectionImg.module.scss';
import Image from '../Image/Image.component';

const SectionImg = ({
  src, className
}) => {
  return (
    <div className={classes[`${className}Block`]}>
      <Image className={`${className}Img`} src={src} alt='section-img'/>
    </div>
  );
};

export default SectionImg;
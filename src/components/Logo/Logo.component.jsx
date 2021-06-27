import React from 'react';
import classes from './Logo.module.scss';
import Image from '../Image/Image.component';

const Logo = () => (
  <div className={classes.logoBlock}>
    <Image alt='logo' src='/img/logo/Logo.svg' className={classes}/>
  </div>
);


export default Logo;
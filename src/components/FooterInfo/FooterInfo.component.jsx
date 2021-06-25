import React from 'react';
import classes from './FooterInfo.module.scss';
import Logo from '../Logo/Logo.component';

const FooterInfo = () => {
  return (
    <div className={classes}>
      <div className={classes}>
        <Logo />
        <p className={classes}>Get out there & discover your next slope, mountain & destination!</p>
      </div>
      <div className={classes}>
        <p className={classes}>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
      </div>
    </div>
  );
};

export default FooterInfo;
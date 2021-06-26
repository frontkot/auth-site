import React from 'react';
import classes from './Entry.module.scss';
import Image from '../Image/Image.component';

const Entry = () => {
  return (
    <div className={classes}>
      <Image
        src='/img/entry/entry-icon.png'
        alt='entry-icon'
        className={classes}
        onClick={() => {console.log('Hello')}}
      />
      <p className={classes}>Account</p>
    </div>
  );
};

export default Entry;
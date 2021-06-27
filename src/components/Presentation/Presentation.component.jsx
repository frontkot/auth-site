import React from 'react';
import classes from './Presentation.module.scss';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header/Header.component';

const Presentation = () => {
  return (
    <div className={classes}>
      <Header />
      <div className={classes}>
        <p className={classes}>a hiking guide</p>
        <h2 className={classes}>Be prepared for the Mountains and beyond!</h2>
        <HashLink smooth to='#01-step'>scroll</HashLink>
      </div>
    </div>
  );
};

export default Presentation;
import React from 'react';
import classes from './FooterNavbarTitle.module.scss';

const FooterNavbarTitle = ({
  textContent
}) => (
  <h3 className={classes}>{textContent}</h3>
);


export default FooterNavbarTitle;
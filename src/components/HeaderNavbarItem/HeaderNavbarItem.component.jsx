import React from 'react';
import classes from './HeaderNavbarItem.module.scss';
import { Link } from 'react-router-dom';

const HeaderNavbarItem = ({
  textContent, link
}) => {
  return (
    <li className={classes}>
      <Link to={link}>{textContent}</Link>
    </li>
  );
};

export default HeaderNavbarItem;
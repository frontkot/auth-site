import React from 'react';
import classes from './NavbarItem.module.scss';
import { Link } from 'react-router-dom';

const NavbarItem = ({
  textContent, link, className
}) => {
  return (
    <li className={classes[className]}>
      <Link to={link} className={classes[`${className}Link`]}>{textContent}</Link>
    </li>
  );
};

export default NavbarItem;
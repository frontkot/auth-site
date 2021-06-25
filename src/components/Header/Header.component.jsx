import React from 'react';
import classes from './Header.module.scss';
import Logo from '../Logo/Logo.component';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar.component';
import Entry from '../Entry/Entry.component';

const Header = () => {
  return (
    <div className={classes}>
      <Logo />
      <HeaderNavbar />
      <Entry />
    </div>
  );
};

export default Header;
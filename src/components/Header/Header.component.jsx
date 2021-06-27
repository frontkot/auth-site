import React from 'react';
import classes from './Header.module.scss';
import Logo from '../Logo/Logo.component';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar.component';
import Entry from '../Entry/Entry.component';

const Header = () => {
  const { headerContent } = classes;
  return (
    <div className={headerContent}>
      <Logo />
      <HeaderNavbar />
      <Entry />
    </div>
  );
};

export default Header;
import React from 'react';
import classes from './HeaderNavbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import { useLocation } from 'react-router-dom';

const headerNavbarArr = [
  {textContent: 'Main page', link: '/'},
  {textContent: 'Equipment', link: '/equipment'},
  {textContent: 'About Us', link: '/about-us'},
  {textContent: 'Blog', link: '/blog'},
];

const HeaderNavbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderItems = headerNavbarArr
    .filter(e => e.link !== path) // filter arr based on user location
    .map((e, index) => (
      <NavbarItem
        textContent={e.textContent}
        link={e.link}
        key={index}
      />
    ))

  return (
    <ul className={classes}>
      {renderItems}
    </ul>
  );
};

export default HeaderNavbar;
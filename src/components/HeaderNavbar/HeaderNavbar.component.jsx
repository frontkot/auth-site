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
  const { navbar } = classes;

  const renderItems = headerNavbarArr
    .filter(e => e.link !== path) // filter arr based on user location
    .map((e, index) => (
      <NavbarItem
        textContent={e.textContent}
        link={e.link}
        key={index}
        className='navbarItem'
      />
    ))

  return (
    <ul className={navbar}>
      {renderItems}
    </ul>
  );
};

export default HeaderNavbar;
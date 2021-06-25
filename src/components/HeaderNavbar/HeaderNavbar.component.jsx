import React from 'react';
import classes from './HeaderNavbar.module.scss';
import HeaderNavbarItem from '../HeaderNavbarItem/HeaderNavbarItem.component';

const headerNavbarArr = [
  {textContent: 'Equipment', link: '/equipment'},
  {textContent: 'About Us', link: '/about-us'},
  {textContent: 'Blog', link: '/blog'},
];

const HeaderNavbar = () => {
  const renderItems = headerNavbarArr.map((e, index) => (
    <HeaderNavbarItem
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
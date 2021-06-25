import React from 'react';
import classes from './FooterNavbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import FooterNavbarTitle from '../FooterNavbarTitle/FooterNavbarTitle.component';

const blogsArr = [
  {textContent: 'About MNTN', link: ''},
  {textContent: 'Contributors & Writers', link: ''},
  {textContent: 'Write For Us', link: ''},
  {textContent: 'Contact Us', link: ''},
  {textContent: 'Privacy Policy', link: ''},
];

const MNTNArr = [
  {textContent: 'The team', link: ''},
  {textContent: 'Jobs', link: ''},
  {textContent: 'Press', link: ''},
]

const FooterNavbar = () => {

  const blogsRenderItems = blogsArr.map((e, index) => (
    <NavbarItem
      key={index}
      textContent={e.textContent}
      link={e.link}
      className={classes}
    />
  ))

  const MNTNRenderItems = MNTNArr.map((e, index) => (
    <NavbarItem
      key={index}
      textContent={e.textContent}
      link={e.link}
      className={classes}
    />
  ))

  return (
    <div className={classes}>
      <div className={classes}>
        <FooterNavbarTitle textContent='More on The Blog' />
        <ul className={classes}>
          {blogsRenderItems}
        </ul>
      </div>
      <div className={classes}>
        <FooterNavbarTitle textContent='More on MNTN' />
        <ul className={classes}>
          {MNTNRenderItems}
        </ul>
      </div>
    </div>
  );
};

export default FooterNavbar;
import React from 'react';
import classes from './FooterNavbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import SectionElement from '../SectionElement/SectionElement.component';

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
  const { navbarBlock, navbarContainer, navbar,  } = classes;

  const blogsRenderItems = blogsArr.map((e, index) => (
    <NavbarItem
      key={index}
      textContent={e.textContent}
      link={e.link}
      className='footerItem'
    />
  ))

  const MNTNRenderItems = MNTNArr.map((e, index) => (
    <NavbarItem
      key={index}
      textContent={e.textContent}
      link={e.link}
      className='footerItem'
    />
  ))

  return (
    <div className={navbarBlock}>
      <div className={navbarContainer}>
        <SectionElement className='navbarTitle' textContent='More on The Blog' tag='h3'/>
        <ul className={navbar}>
          {blogsRenderItems}
        </ul>
      </div>
      <div className={navbarContainer}>
        <SectionElement className='navbarTitle' textContent='More on MNTN' tag='h3'/>
        <ul className={navbar}>
          {MNTNRenderItems}
        </ul>
      </div>
    </div>
  );
};

export default FooterNavbar;
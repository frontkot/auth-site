import React from 'react';
import classes from './FooterNavbar.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem.component';
import SectionElement from '../SectionElement/SectionElement.component';
import { useSelector } from 'react-redux';
import { getIsLogin } from '../../store/user/selectors';

const blogsArr = [
  {textContent: 'About MNTN', link: '/about-mntn'},
  {textContent: 'Contributors & Writers', link: '/contributors&writers'},
  {textContent: 'Write For Us', link: '/write-for-us', isUser: true},
  {textContent: 'Contact Us', link: '/contact-us'},
  {textContent: 'Privacy Policy', link: '/privacy-policy'},
];

const MNTNArr = [
  {textContent: 'The team', link: '/the-team'},
  {textContent: 'Jobs', link: '/jobs'},
  {textContent: 'Press', link: '/press'},
]

const FooterNavbar = () => {
  const { navbarBlock, navbarContainer, navbar,  } = classes;
  const isLogin = useSelector(getIsLogin);
  const blogsArrIsUser = isLogin ? blogsArr : blogsArr.filter(e => !e.isUser); // different arr for login users

  const blogsRenderItems = blogsArrIsUser.map((e, index) => (
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
import React from 'react';
import classes from './Footer.module.scss';
import FooterInfo from '../FooterInfo/FooterInfo.component';
import FooterNavbar from '../FooterNavbar/FooterNavbar.component';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { containerMainPage, containerOtherPage } = classes;
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={path === '/' ? containerMainPage : containerOtherPage}>
      <FooterInfo />
      <FooterNavbar />      
    </div>
  );
};

export default Footer;
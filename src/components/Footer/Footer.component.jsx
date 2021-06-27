import React from 'react';
import classes from './Footer.module.scss';
import FooterInfo from '../FooterInfo/FooterInfo.component';
import FooterNavbar from '../FooterNavbar/FooterNavbar.component';

const Footer = () => {
  const { container } = classes;
  return (
    <div className={container}>
      <FooterInfo />
      <FooterNavbar />      
    </div>
  );
};

export default Footer;
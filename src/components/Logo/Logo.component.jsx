import React from 'react';
import classes from './Logo.module.scss';
import Image from '../Image/Image.component';

const logoDataArr = [
  {alt: 'logo-icon', src: '/img/logo/M.png'},
  {alt: 'logo-icon', src: '/img/logo/N.png'},
  {alt: 'logo-icon', src: '/img/logo/M.png'},
  {alt: 'logo-icon', src: '/img/logo/M.png'},
]

const Logo = () => {
  const renderItems = logoDataArr.map((e, index) => (
    <Image
      key={index}
      alt={e.alt}
      src={e.src}
      className={classes}
    />
  ))

  return (
    <div className={classes}>
      {renderItems}
    </div>
  );
};

export default Logo;
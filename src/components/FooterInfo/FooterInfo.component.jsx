import React from 'react';
import classes from './FooterInfo.module.scss';
import Logo from '../Logo/Logo.component';
import SectionElement from '../SectionElement/SectionElement.component';

const FooterInfo = () => {
  const { block, logoBlock, logoText, copyrightText } = classes;
  return (
    <div className={block}>
      <div className={logoBlock}>
        <Logo />
        <SectionElement textContent='Get out there & discover your next slope, mountain & destination!' className='logoText' tag='p' />
      </div>
      <SectionElement textContent='Copyright 2019 MNTN, Inc. Terms & Privacy' className='copyrightText' tag='p' />
    </div>
  );
};

export default FooterInfo;
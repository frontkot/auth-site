import React from 'react';
import classes from './Presentation.module.scss';
import { NavHashLink } from 'react-router-hash-link';
import Header from '../Header/Header.component';
import SectionElement from '../SectionElement/SectionElement.component';

const Presentation = () => {
  const { backGround, container, presentContent, presentLink } = classes;

  return (
    <div className={backGround}  style={{ backgroundImage: 'url(img/background/main-bg.jpg)'}}>
      <div className={container}>
        <Header />
        <div className={presentContent}>
          <SectionElement className='presentTitle' textContent='a hiking guide' tag='p' />
          <SectionElement className='presentHeader' textContent='Be prepared for the Mountains and beyond!' tag='h2' />
          <NavHashLink className={presentLink} smooth to='#section-1'>scroll down</NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
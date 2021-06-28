import React from 'react';
import classes from './DevPage.module.scss';
import SectionElement from '../../components/SectionElement/SectionElement.component';

const DevPage = () => {
  const { container } = classes;
  return (
    <div className={container}>
      <SectionElement tag='h2' className='devHeader' textContent='This is developer page' />
      <SectionElement tag='p' className='devText' textContent='At the moment, this page is under construction.' />
      <SectionElement tag='p' className='devText' textContent='We are sorry for the inconvenience caused.' />
    </div>
  );
};

export default DevPage;
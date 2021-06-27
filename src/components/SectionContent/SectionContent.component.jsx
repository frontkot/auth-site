import React from 'react';
import classes from './SectionContent.module.scss';
import SectionElement from '../SectionElement/SectionElement.component';
import { Link } from 'react-router-dom';

const SectionContent = ({
  title, header, text, num, link
}) => {
  const { container, block, blogLink } = classes;
  return (
    <div className={container}>
      <div className={block}>
        <SectionElement textContent={`0${num}`} tag='span' className='sectionNum' />
        <SectionElement textContent={title} tag='p' className='sectionTitle' />
        <SectionElement textContent={header} tag='h3' className='sectionHeader' />
        <SectionElement textContent={text} tag='p' className='sectionText' />
        <Link to={link} className={blogLink}>read more</Link>
      </div>
    </div>
  );
};

export default SectionContent;
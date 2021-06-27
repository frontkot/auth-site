import React from 'react';
import classes from './SectionContent.module.scss';
import SectionElement from '../SectionElement/SectionElement.component';
import { Link } from 'react-router-dom';

const SectionContent = ({
  title, header, text, num
}) => {
  return (
    <div className={classes}>
      <SectionElement textContent={`0${num}`} tag='span' className={classes} />
      <SectionElement textContent={title} tag='p' className={classes} />
      <SectionElement textContent={header} tag='h3' className={classes} />
      <SectionElement textContent={text} tag='p' className={classes} />
      <Link to='/blog-01' className={classes}>read more</Link>
    </div>
  );
};

export default SectionContent;
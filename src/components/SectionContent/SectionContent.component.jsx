import React from 'react';
import classes from './SectionContent.module.scss';

const SectionContent = ({
  title, header, text, num
}) => {
  return (
    <div className={classes}>
      <span>{`0${num}`}</span>
      <p>{title}</p>
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};

export default SectionContent;
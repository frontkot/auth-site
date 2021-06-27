import React from 'react';
import classes from './SectionElement.module.scss';

const SectionElement = ({
  className, textContent, tag
}) => {
  const TagName = tag;
  return (
    <TagName className={classes[className]}>
      {textContent}
    </TagName>
  );
};

export default SectionElement;
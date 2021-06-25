import React from 'react';
import classes from './SectionItem.module.scss';
import SectionImg from '../SectionImg/SectionImg.component';
import SectionContent from '../SectionContent/SectionContent.component';

const SectionItem = ({
  num, imgSrc, title, header, text
}) => {
  return (
    <div className={classes}>
      <SectionImg src={imgSrc}/>
      <SectionContent title={title} header={header} text={text} num={num}/>
    </div>
  );
};

export default SectionItem;
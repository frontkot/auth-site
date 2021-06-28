import React from 'react';
import classes from './SectionItem.module.scss';
import SectionImg from '../SectionImg/SectionImg.component';
import SectionContent from '../SectionContent/SectionContent.component';

const SectionItem = ({
  num, imgSrc, title, header, text, link, anchor
}) => {
  const { sectionContainer, sectionContainerRightSide, sectionContainerLeftSide } = classes;
  return (
    <div id={anchor}
      className={num % 2 ? // detect second section for set needed className
        `${sectionContainer} ${sectionContainerRightSide}` 
      : 
        `${sectionContainer} ${sectionContainerLeftSide}`}
    >
      {num % 2 ? // detect second section for set img on left side
        <>
          <SectionContent title={title} header={header} text={text} num={num} link={link}/>
          <SectionImg src={imgSrc} className='section'/>
        </>
        :
        <>
          <SectionImg src={imgSrc} className='section'/>
          <SectionContent title={title} header={header} text={text} num={num} link={link}/>
        </>
      }
    </div>
  );
};

export default SectionItem;

<svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white"/>
</svg>

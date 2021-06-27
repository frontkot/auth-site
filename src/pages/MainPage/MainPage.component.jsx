import React from 'react';
import Presentation from '../../components/Presentation/Presentation.component';
import SectionItem from '../../components/SectionItem/SectionItem.component';

const sectionsArr = [
  {
    imgSrc: '/img/sections/section-1.png',
    link: 'blog-1',
    title: 'get started', 
    header: 'What level of hiker are you?', 
    text: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?',
  },
  {
    imgSrc: '/img/sections/section-2.png',
    link: 'blog-2',
    title: 'hiking essentials',
    header: 'Picking the right Hiking Gear!',
    text: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.',
  },
  {
    imgSrc: '/img/sections/section-3.png',
    link: 'blog-3',
    title: 'where you go is the key',
    header: 'Understand Your Map & Timing',
    text: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
  },
]

const MainPage = () => {
  const renderSections = sectionsArr.map((e, index) => (
    <SectionItem
      key={index}
      imgSrc={e.imgSrc}
      title={e.title}
      header={e.header}
      text={e.text}
      num={index+1}
      link={e.link}
    />
  ))
  return (
    <div>
      <Presentation />
      {renderSections}
    </div>
  );
};

export default MainPage;
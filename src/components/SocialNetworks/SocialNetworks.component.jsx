import React from 'react';
import SocialNetworksItem from '../SocialNetworksItem/SocialNetworksItem.component';
import classes from './SocialNetworks.module.scss';

const snArr = [
  {src: '/links/linkedin-icon.ico', url: 'https://www.linkedin.com/in/konstantin-borzenko-b710221b9/'},
  {src: '/links/github-icon.ico', url: 'https://github.com/frontkot'},
]

const SocialNetworks = () => {
  const renderItems = snArr.map((e, index) => (
      <SocialNetworksItem
        key={index}
        src={e.src}
        url={e.url}
      />
    ))
  
  return (
    <div className={classes}>
      <p className={classes}>Go to my resources</p>
      <ul className={classes}>
        {renderItems}        
      </ul>
    </div>
  );
};

export default SocialNetworks;
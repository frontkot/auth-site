import React from 'react';
import classes from './SocialNetworksItem.module.scss';
import Image from '../Image/Image.component';

const SocialNetworksItem = ({
  url, src
}) => {
  return (
    <li>
      <a 
        className={classes}
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <Image alt='social-network' src={src} className={classes}/>
      </a>
    </li>
  );
};

export default SocialNetworksItem;
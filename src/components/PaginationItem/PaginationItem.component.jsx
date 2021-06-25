import React from 'react';
import classes from './PaginationItem.module.scss';
import { HashLink } from 'react-router-hash-link';

const PaginationItem = ({
  anchor, textContent
}) => {
  return (
    <HashLink
      activeClassName={classes}
      className={classes}
      smooth
      to={anchor}
    >
      {textContent}
    </HashLink>
  );
};

export default PaginationItem;
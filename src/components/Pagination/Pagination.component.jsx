import React from 'react';
import classes from './Pagination.module.scss';
import PaginationItem from '../PaginationItem/PaginationItem.component';

const paginationArr = [
  {anchor: '#start', textContent: 'Start'},
  {anchor: '#01-section', textContent: '01'},
  {anchor: '#02-section', textContent: '02'},
  {anchor: '#03-section', textContent: '03'},
]

const Pagination = () => {
  const renderItems = paginationArr.map((e, index) => (
    <PaginationItem
      anchor={e.anchor}
      textContent={e.textContent}
      key={index}
    />
  ));

  return (
    <div className={classes}>
      {renderItems}
    </div>
  );
};

export default Pagination;
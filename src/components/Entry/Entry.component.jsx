import React, { useEffect } from 'react';
import classes from './Entry.module.scss';
import Image from '../Image/Image.component';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { checkIsOpen } from '../../store/modalWindow/selectors';

const Entry = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);

  return (
    <div className={classes} onClick={() => dispatch(isOpenWindow(!isOpen))}>
      <Image
        src='/img/entry/entry-icon.png'
        alt='entry-icon'
        className={classes}
      />
      <p className={classes}>Account</p>
    </div>
  );
};

export default Entry;
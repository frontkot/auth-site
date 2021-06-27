import React from 'react';
import classes from './Entry.module.scss';
import Image from '../Image/Image.component';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { checkIsOpen } from '../../store/modalWindow/selectors';

const Entry = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);
  const { entryBlock, entryIconBlock, entryIcon, entryText } = classes;

  return (
    <div className={entryBlock} onClick={() => dispatch(isOpenWindow(!isOpen))}>
      <div className={entryIconBlock}>
        <Image
          src='/img/entry/entry-icon.png'
          alt='entry-icon'
          className={entryIcon}
        />
      </div>
      <p className={entryText}>Account</p>
    </div>
  );
};

export default Entry;
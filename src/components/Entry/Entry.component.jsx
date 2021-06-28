import React from 'react';
import classes from './Entry.module.scss';
import Image from '../Image/Image.component';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { checkIsOpen } from '../../store/modalWindow/selectors';
import { getIsLogin, gatUserData } from '../../store/user/selectors';

const Entry = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);
  const { entryBlock, entryIconBlock, entryIcon, entryText } = classes;
  const isLogin = useSelector(getIsLogin);
  const userData = useSelector(gatUserData);

  return (
    <div className={entryBlock} onClick={() => dispatch(isOpenWindow(!isOpen))}>
      <div className={entryIconBlock}>
        <Image
          src='/img/entry/entry-icon.png'
          alt='entry-icon'
          className={entryIcon}
        />
      </div>
      <p className={entryText}>{isLogin ? userData.name : 'Account'}</p>       
    </div>
  );
};

export default Entry;
import React, { useRef } from 'react';
import classes from './ModalWindow.module.scss';
import EntryForm from '../EntryForm/EntryForm.component';
import Button from '../Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsOpen } from '../../store/modalWindow/selectors';
import { isOpenWindow } from '../../store/modalWindow/actions';

const ModalWindow = ({
  header, isEntry
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);
  const modal = useRef();

  const checkIsModalWindow = (isModal) => isModal ? null : dispatch(isOpenWindow(!isOpen));

  const signOut = () => {
    checkIsModalWindow(false);
    alert('You are sign out')
  }

  return (
    <div className={classes} onClick={() => modal ? null : checkIsModalWindow(!isOpen)}>
      <div className={classes} ref={modal}>
        <h3 className={classes}>{header}</h3>
        {
          isEntry
            ?
              <EntryForm />
            :
              <div className={classes}>
                <Button textContent='Yes' onClick={signOut} />
                <Button textContent='No' onClick={() => checkIsModalWindow(!isOpen)}/>
              </div>
        }
      </div>
    </div>
  );
};

export default ModalWindow;
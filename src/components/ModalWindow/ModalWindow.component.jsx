import React from 'react';
import classes from './ModalWindow.module.scss';
import EntryForm from '../EntryForm/EntryForm.component';
import Button from '../Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsOpen } from '../../store/modalWindow/selectors';
import { isOpenWindow } from '../../store/modalWindow/actions';

const ModalWindow = ({
  header, isEntry
}) => {
  const { modalWindow, modalBlock, modalHeader, modalContent } = classes;
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);

  const checkIsModalWindow = (isModal) => isModal ? null : dispatch(isOpenWindow(!isOpen));

  const signOut = () => {
    checkIsModalWindow(false);
    alert('You are sign out')
  }

  return (
    <div className={modalWindow}  onClick={() => checkIsModalWindow(!isOpen)}>
      <div className={modalBlock}>
        <h3 className={modalHeader}>{header}</h3>
        {
          isEntry
            ?
              <EntryForm />
            :
              <div className={modalContent}>
                <Button className='modalButton' textContent='Yes' onClick={signOut} />
                <Button className='modalButton' textContent='No' onClick={() => checkIsModalWindow(!isOpen)}/>
              </div>
        }
      </div>
    </div>
  );
};

export default ModalWindow;
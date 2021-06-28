import React from 'react';
import classes from './ModalWindow.module.scss';
import EntryForm from '../EntryForm/EntryForm.component';
import Button from '../Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsOpen } from '../../store/modalWindow/selectors';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { getIsLogin } from '../../store/user/selectors';
import { userLogout } from '../../store/user/actions';
import { toastr } from "react-redux-toastr";

const ModalWindow = () => {
  const { modalWindow, modalBlock, modalHeader, modalContent } = classes;
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);
  const isLogin = useSelector(getIsLogin);

  const checkIsModalWindow = (isModal) => isModal ? null : dispatch(isOpenWindow(!isOpen));

  const signOut = () => {
    checkIsModalWindow(false);
    dispatch(userLogout());
    toastr.warning('You are logged out', 'We will miss you')
  }

  return (
    <div className={modalWindow} id='modalBg' onClick={(e) => e.target.id === 'modalBg' ? checkIsModalWindow(!isOpen) : null}>
      <div className={modalBlock}>
        <h3 className={modalHeader}>{isLogin ? 'Do tou want sign out?' : 'Entry'}</h3>
        {
          isLogin
            ?
              <div className={modalContent}>
                <Button className='modalButton' textContent='Yes' onClick={signOut} />
                <Button className='modalButton' textContent='No' onClick={() => checkIsModalWindow(!isOpen)}/>
              </div>
            :
              <EntryForm />
        }
      </div>
    </div>
  );
};

export default ModalWindow;
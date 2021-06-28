import React from 'react';
import classes from './ModalWindow.module.scss';
import EntryForm from '../EntryForm/EntryForm.component';
import Button from '../Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsOpen } from '../../store/modalWindow/selectors';
import { isOpenWindow } from '../../store/modalWindow/actions';
import { getIsLogin } from '../../store/user/selectors';
import { userLogout, userLogin } from '../../store/user/actions';
import { toastr } from "react-redux-toastr";
import { GoogleLogin } from 'react-google-login';
import SectionElement from '../SectionElement/SectionElement.component';

const ModalWindow = () => {
  const { modalWindow, modalBlock, modalHeader, modalContent, signInBlock } = classes;
  const dispatch = useDispatch();
  const isOpen = useSelector(checkIsOpen);
  const isLogin = useSelector(getIsLogin);

  const checkIsModalWindow = (isModal) => isModal ? null : dispatch(isOpenWindow(!isOpen));

  const signOut = () => {
    checkIsModalWindow(false);
    dispatch(userLogout());
    toastr.warning('You are logged out', 'We will miss you')
  }

  const onSuccesGoogle = (response) => {
    const userData = response;
    const userEmail = userData.dt.Nt;
    const userName = userData.dt.uU;
    const user = {name: userName, email: userEmail};

    checkIsModalWindow(false);
    dispatch(userLogin(user))
    toastr.success('You are logged in', `Hello, ${user.name}`)
  }

  const onFailureGoogle = (response) => {
    console.log(response);
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
            <div className={signInBlock}>
              <GoogleLogin
                clientId='692131150771-m896e1id3jjnecuntnuqr1albrfbibpl.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={onSuccesGoogle}
                onFailure={onFailureGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <SectionElement tag='p' textContent='or' className='signInText' />
              <EntryForm />
            </div>
        }
      </div>
    </div>
  );
};

export default ModalWindow;
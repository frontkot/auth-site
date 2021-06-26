import React from 'react';
import classes from './ModalWindow.module.scss';
import EntryForm from '../EntryForm/EntryForm.component';
import Button from '../Button/Button.component';

const ModalWindow = ({
  header, isEntry
}) => {
  return (
    <div className={classes}>
      <h3 className={classes}>{header}</h3>
      {
        isEntry 
          ?
            <EntryForm />
          :
            <div className={classes}>
              <Button textContent='Yes' onClick={() => {alert('I am logged out')}} />
              <Button textContent='No' onClick={() => {console.log('Close modal')}} />
            </div>
      }
    </div>
  );
};

export default ModalWindow;
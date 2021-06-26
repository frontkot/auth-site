import React from 'react';
import classes from './Button.module.scss';

const Button = ({
  textContent, className, onClick
}) => {
  return (
    <button className={classes[className]} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;
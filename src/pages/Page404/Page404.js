import React from "react";
import classes from './Page404.module.scss';
import Button from '../../components/Button/Button.component';

const Page404 = ({
  history
}) => {
  const { container, header, text } = classes;
  return (
    <div className={container}>
      <h2 className={header}>Error 404</h2>
      <p className={text}>No such page exists</p>
      <Button
        textContent='Go Back'
        onClick={() => history.goBack()}
        className='page404Button'
      />
    </div>
  );
};

export default Page404;

import React, { Fragment } from 'react';
import mealPicture from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React App</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={mealPicture} alt="Table full of delicious meals" />
      </div>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from 'react';
import mealPicture from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React App</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealPicture} alt="Table full of delicious meals" />
      </div>
    </Fragment>
  );
};

export default Header;

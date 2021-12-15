import React from 'react';
import styles from './HeaderCartButton.module.css';
import ChartIcon from '../Cart/ChartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>{ChartIcon}</span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

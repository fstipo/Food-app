import React, { useContext, useEffect, useState } from 'react';
import ChartIcon from '../Cart/ChartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnEffect, setBtnEffect] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${styles.button} ${btnEffect ? styles.bump : ' '}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnEffect(true);
    const timer = setTimeout(() => {
      setBtnEffect(false);
    }, 300);

    // cleanUp function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <ChartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

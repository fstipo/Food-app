import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React App</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious meals" />
      </div>
    </Fragment>
  );
};

export default Header;

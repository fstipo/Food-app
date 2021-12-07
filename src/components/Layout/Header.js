import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React App</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious meals" />
      </div>
    </Fragment>
  );
};

export default Header;

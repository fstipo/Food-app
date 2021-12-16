import styles from './HeaderCartButton.module.css';
import ChartIcon from '../Cart/ChartIcon';

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <ChartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

import styles from './MealItemForm.module.css';

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

import styles from "./Button.module.css";

const Button = ({ placeHolder }) => {
  return <button className={styles.button}>{placeHolder}</button>;
};

export default Button;

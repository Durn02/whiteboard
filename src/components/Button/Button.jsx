import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ placeholder, as, to, onClick }) => {
  if (as === "Link") {
    return (
      <Link to={to}>
        <button className={styles.button}>{placeholder}</button>
      </Link>
    );
  }
  return (
    <button className={styles.button} onClick={onClick}>
      {placeholder}
    </button>
  );
};

export default Button;

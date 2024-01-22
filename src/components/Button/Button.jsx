import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ placeholder, as, to }) => {
  if (as === "Link") {
    return (
      <Link to={to}>
        <button className={styles.button}>{placeholder}</button>
      </Link>
    );
  }
  return <button className={styles.button}>{placeholder}</button>;
};

export default Button;

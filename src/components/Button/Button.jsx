import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ placeHolder, as, to }) => {
  if (as === "Link") {
    return (
      <Link to={to}>
        <button className={styles.button}>{placeHolder}</button>
      </Link>
    );
  }
  return <button className={styles.button}>{placeHolder}</button>;
};

export default Button;

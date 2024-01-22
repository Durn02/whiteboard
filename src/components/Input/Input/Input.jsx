import styles from "./Input.module.css";

function Input({ placeholder }) {
  return (
    <input
      className={styles.input}
      type="input"
      placeholder={placeholder}
    ></input>
  );
}

export default Input;

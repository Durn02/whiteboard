import styles from "./Input.module.css";

const Input = ({ placeholder }) => {
  return (
    <input
      className={styles.input}
      type="input"
      placeholder={placeholder}
    ></input>
  );
};

export default Input;

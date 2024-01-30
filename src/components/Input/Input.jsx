import styles from "./Input.module.css";

const Input = ({ placeholder, writtenText }) => {
  return (
    <input
      className={styles.input}
      type="input"
      placeholder={placeholder}
      onChange={(e) => writtenText(e.target.value)}
    ></input>
  );
};

export default Input;

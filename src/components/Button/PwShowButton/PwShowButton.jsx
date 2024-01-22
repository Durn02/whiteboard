import styles from "./PwShowButton.module.css";

function PwShowButton({ onMouseDown, onMouseUp }) {
  return (
    <button
      className={styles.button}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      보이기
    </button>
  );
}

export default PwShowButton;

import { useState } from "react";
import PwShowButton from "../../Button/PwShowButton/PwShowButton";
import styles from "./PwInput.module.css";

function PwInput({ placeholder }) {
  const [showPw, setShowPw] = useState("password");
  return (
    <div className={styles.container}>
      <input
        className={styles.pwInput}
        type={showPw}
        placeholder={placeholder}
      ></input>
      <PwShowButton
        onMouseDown={() => setShowPw("input")}
        onMouseUp={() => setShowPw("password")}
      />
    </div>
  );
}

export default PwInput;

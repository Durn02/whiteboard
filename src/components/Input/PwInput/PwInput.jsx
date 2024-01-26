import { useState } from "react";
import PwShowButton from "../../Button/PwShowButton/PwShowButton";
import styles from "./PwInput.module.css";

const PwInput = () => {
  const [showPw, setShowPw] = useState("password");
  return (
    <div className={styles.container}>
      <input
        className={styles.pwInput}
        type={showPw}
        placeholder="비밀번호"
      ></input>
      <PwShowButton
        onMouseDown={() => setShowPw("input")}
        onMouseUp={() => setShowPw("password")}
      />
    </div>
  );
};

export default PwInput;

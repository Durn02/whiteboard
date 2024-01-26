import PwInput from "../PwInput/PwInput";
import style from "./SigninPwInput.module.css";

const SigninPwInput = () => {
  return (
    <div className={style.inputContainer}>
      <PwInput />
    </div>
  );
};

export default SigninPwInput;

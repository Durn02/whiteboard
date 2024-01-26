import Input from "../Input";
import style from "./SigninInput.module.css";

const SigninInput = ({ placeholder }) => {
  return (
    <div className={style.inputContainer}>
      <Input placeholder={placeholder} />
    </div>
  );
};

export default SigninInput;

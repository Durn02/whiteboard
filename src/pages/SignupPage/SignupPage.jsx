import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import Button from "../../components/Button/Button";
import style from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signupbox}>
        <div className={style.titleContainer}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"아이디"} />
        </div>
        <div className={style.inputContainer}>
          <PwInput />
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"이름"} />
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"학번"} />
        </div>
        <div className={style.inputContainer}>
          <Select />
        </div>
        <div className={style.buttonContainer}>
          <Button placeholder="회원가입" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

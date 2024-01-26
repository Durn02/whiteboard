import { Link } from "react-router-dom";
import Select from "../../components/Select/Select";
import SignupInput from "../../components/Input/SigninInput/SigninInput";
import SignupPwInput from "../../components/Input/SigninPwInput/SigninPwInput";
import SignupButton from "../../components/Button/SigninButton/SigninButton";
import style from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signupbox}>
        <div className={style.title}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <SignupInput placeholder={"아이디"} />
        <SignupPwInput />
        <SignupInput placeholder={"이름"} />
        <SignupInput placeholder={"학번"} />
        <Select />
        <SignupButton placeholder={"회원가입"} />
      </div>
    </div>
  );
};

export default SignupPage;

import { Link } from "react-router-dom";
import SigninInput from "../../components/Input/SigninInput/SigninInput";
import SigninPwInput from "../../components/Input/SigninPwInput/SigninPwInput";
import SigninButton from "../../components/Button/SigninButton/SigninButton";
import style from "./SigninPage.module.css";

const SigninPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.title}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <SigninInput placeholder={"아이디"} />
        <SigninPwInput />
        <SigninButton placeholder={"로그인"} />
      </div>
    </div>
  );
};

export default SigninPage;

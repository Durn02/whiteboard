import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import Button from "../../components/Button/Button";
import style from "./SigninPage.module.css";

const SigninPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.titleContainer}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"아이디"} />
        </div>
        <div className={style.inputContainer}>
          <PwInput />
        </div>
        <div className={style.buttonContainer}>
          <Button placeholder={"로그인"} />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

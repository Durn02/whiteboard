import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import style from "./SigninPage.module.css";

const SigninPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.title}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <Input placeholder={"아이디"} />
        <PwInput placeholder={"비밀번호"} />
        <Button placeholder={"로그인"} />
      </div>
    </div>
  );
};

export default SigninPage;

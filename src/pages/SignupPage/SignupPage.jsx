import style from "./SignupPage.module.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";

const SignupPage = () => {
  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.title}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <Input placeholder={"아이디"} />
        <PwInput placeholder={"비밀번호"} />
        <Input placeholder={"이름"} />
        <Input placeholder={"학번"} />
        <Select />
        <Button placeholder={"회원가입"} />
      </div>
    </div>
  );
};

export default SignupPage;

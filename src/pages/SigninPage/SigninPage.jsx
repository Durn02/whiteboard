import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import Button from "../../components/Button/Button";
import style from "./SigninPage.module.css";
import { useState } from "react";
import getUserInfo from "../../utils/getUserInfo";

const SigninPage = ({ setUserInfo }) => {
  const [signInId, setSignInId] = useState(null);
  const [signInPw, setSignInPw] = useState(null);
  const navigator = useNavigate();
  const loginButtonClickHandler = () => {
    const loginStatus = getUserInfo(signInId, signInPw);
    if (loginStatus === 0)
      alert("로그인을 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요");
    else {
      setUserInfo(loginStatus);
      alert("로그인 성공");
      navigator("/");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.titleContainer}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"아이디"} writtenText={setSignInId} />
        </div>
        <div className={style.inputContainer}>
          <PwInput writtenText={setSignInPw} />
        </div>
        <div className={style.buttonContainer}>
          <Button
            placeholder={"로그인"}
            onClick={() => {
              loginButtonClickHandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

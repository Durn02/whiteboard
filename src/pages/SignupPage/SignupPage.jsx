import { Link, useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import PwInput from "../../components/Input/PwInput/PwInput";
import Button from "../../components/Button/Button";
import style from "./SignupPage.module.css";
import { useState } from "react";
import createUserInfo from "../../utils/createUserInfo";

const SignupPage = () => {
  const [signUpId, setSignUpId] = useState();
  const [signUpPw, setSignUpPw] = useState();
  const [signUpName, setSignUpName] = useState();
  const [signUpNumber, setSignUpNumber] = useState();
  const [signUpIsStudent, setSignUpIsStudent] = useState("N");
  const navigator = useNavigate();

  const onRegisterButtonClickHandler = async () => {
    const success = await createUserInfo(
      signUpId,
      signUpPw,
      signUpName,
      signUpNumber,
      signUpIsStudent
    );
    if (success === 0) {
      alert("회원가입이 실패했습니다. 다시 시도해 주세요");
    } else if (success === 1) {
      alert("회원가입 성공!");
      navigator("/");
    } else if (success === -1) {
      alert("빈 항목이 있습니다.");
    } else if (success === -2) {
      alert("이미 회원가입 하였습니다.");
    } else {
      alert("알 수 없는 오류로 회원가입이 실패했습니다.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.signupbox}>
        <div className={style.titleContainer}>
          <Link to={"/"}>WhiteBoard</Link>
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"아이디"} writtenText={setSignUpId} />
        </div>
        <div className={style.inputContainer}>
          <PwInput writtenText={setSignUpPw} />
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"이름"} writtenText={setSignUpName} />
        </div>
        <div className={style.inputContainer}>
          <Input placeholder={"학번"} writtenText={setSignUpNumber} />
        </div>
        <div className={style.inputContainer}>
          <Select writtenText={setSignUpIsStudent} />
        </div>
        <div className={style.buttonContainer}>
          <Button
            placeholder="회원가입"
            onClick={() => {
              onRegisterButtonClickHandler(
                signUpId,
                signUpPw,
                signUpName,
                signUpNumber,
                signUpIsStudent
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

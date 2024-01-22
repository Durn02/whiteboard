import Button from "../../components/Button/Button";
import style from "./SigninPage.module.css";

function SigninPage() {
  return (
    <div className={style.container}>
      <div className={style.signinbox}>
        <div className={style.title}>
          <>WhiteBoard</>
        </div>
        <input className={style.input}></input>
        <input className={style.input}></input>
        <Button placeHolder={"로그인"} />
      </div>
    </div>
  );
}

export default SigninPage;

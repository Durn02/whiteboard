import Header from "../../components/Header/Header";
import style from "./LandingPage.module.css";

const LandingPage = ({ userInfo }) => {
  return (
    <>
      <Header logined={false} userInfo={userInfo} />
      <div className={style.container}>
        <div className={style.greetings}>Whitboard에 오신것을 환영합니다!</div>
      </div>
    </>
  );
};

export default LandingPage;

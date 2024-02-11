import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import style from "./LandingPage.module.css";

const LandingPage = ({ userInfo, logined }) => {
  return (
    <>
      <Header logined={logined} userInfo={userInfo} />
      <div className={style.container}>
        {!logined && (
          <div className={style.greetingsContainer}>
            Whitboard에 오신것을 환영합니다!
          </div>
        )}
        {logined && (
          <div className={style.gotoButtonContainer}>
            {userInfo.isStudent === "Y" && (
              <Link to={"/register"}>
                <Button placeholder={"내 페이지로 이동하기"} />
              </Link>
            )}
            {userInfo.isStudent === "N" && (
              <Link to={"/manage"}>
                <Button placeholder={"내 페이지로 이동하기"} />
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;

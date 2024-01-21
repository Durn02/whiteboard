import Header from "../../components/Header/Header";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  const userInfo = {
    name: "두",
    id: "cdh",
    pw: "1234",
    student_number: "20211",
    isStudent: "Y",
  };
  return (
    <>
      <Header logined={false} userInfo={userInfo} />
      <div className={style.container}>메인 페이지</div>
    </>
  );
};

export default LandingPage;

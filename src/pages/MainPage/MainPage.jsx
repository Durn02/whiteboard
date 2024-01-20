import Header from "../../components/Header/Header";

const MainPage = () => {
  const userInfo = {
    name: "두",
    id: "cdh",
    pw: "1234",
    student_number: "20211",
    isStudent: "Y",
  };
  return (
    <>
      <Header logined={true} userInfo={userInfo} />
      <div>메인 페이지</div>
    </>
  );
};

export default MainPage;

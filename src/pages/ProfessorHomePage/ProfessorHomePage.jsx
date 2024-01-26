import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProfessorTable from "../../components/Table/ProfessorTable";
import style from "./ProfessorHomePage.module.css";
import getLectureInfo from "../../utils/getLectureInfo";

const ProfessorPage = ({ userInfo }) => {
  const lectures = getLectureInfo();
  alert(lectures);
  return (
    <div>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.title}>내 강의</div>
      <div className={style.container}>
        <div className={style.table}>
          <ProfessorTable />
        </div>
        <div className={style.button}>
          <Button
            placeholder={"강의 추가"}
            onClick={() => {
              alert("hi");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessorPage;

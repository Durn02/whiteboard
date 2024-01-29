import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import StudentTable from "../../components/Table/StudentTable/StudentTable";
import getLectureInfo from "../../utils/getLectureInfo";
import style from "./StudentHomePage.module.css";

const StudentHomePage = ({ userInfo }) => {
  const lectureInfo = getLectureInfo();
  return (
    <>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>강의목록</div>
        <div className={style.myLectureContainer}>
          <Button placeholder={"전체 강의"} />
          <Button placeholder={"내 강의"} />
        </div>
      </div>
      <div className={style.tableContainer}>
        <StudentTable lectureInfo={lectureInfo} userInfo={userInfo} />
      </div>
    </>
  );
};

export default StudentHomePage;

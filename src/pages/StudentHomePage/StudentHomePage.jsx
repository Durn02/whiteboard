import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import StudentTable from "../../components/Table/StudentTable/StudentTable";
import { getLectureInfo } from "../../utils/getLectureInfo";
import style from "./StudentHomePage.module.css";
import { useEffect } from "react";

const StudentHomePage = ({ userInfo }) => {
  const [lectureInfo, setLectureInfo] = useState();
  const [render, setRender] = useState(0);
  const getData = async () => {
    const data = await getLectureInfo();
    setLectureInfo(data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setRender(0);
    getData();
  }, [render]);
  const [showMyLecture, setShowMyLecture] = useState(false);
  return (
    <>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.topContentContainer}>
        <div className={style.titleContainer}>강의목록</div>
        <div className={style.buttonContainer}>
          <Button
            placeholder={"전체 강의"}
            onClick={() => setShowMyLecture(false)}
          />
          <Button
            placeholder={"내 강의"}
            onClick={() => setShowMyLecture(true)}
          />
        </div>
      </div>
      <div className={style.tableContainer}>
        <StudentTable
          lectureInfo={lectureInfo}
          userInfo={userInfo}
          showMyLecture={showMyLecture}
          setRender={setRender}
        />
      </div>
    </>
  );
};

export default StudentHomePage;

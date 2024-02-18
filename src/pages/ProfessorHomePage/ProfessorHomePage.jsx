import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProfessorTable from "../../components/Table/ProfessorTable/ProfessorTable";
import { getLectureInfoByProf } from "../../utils/getLectureInfo";
import ProfessorHomePageModal from "../../components/Modal/ProfessorHomePageModal/ProfessorHomePageModal";
import style from "./ProfessorHomePage.module.css";

const ProfessorPage = ({ userInfo }) => {
  const [lectureInfoByProf, setLectureInfoByProf] = useState([]);
  const [render, setRender] = useState(0);
  const getData = async () => {
    const data = await getLectureInfoByProf(userInfo.name);
    setLectureInfoByProf(data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setRender(0);
    getData();
  }, [render]);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>강의목록</div>
        <div className={style.myLectureContainer}>
          <Button
            placeholder={"강의추가"}
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      </div>
      <div className={style.tableContainer}>
        <ProfessorTable lectureInfoByProf={lectureInfoByProf} />
      </div>
      {showModal && (
        <ProfessorHomePageModal
          setShowModal={setShowModal}
          userName={userInfo.name}
          setRender={setRender}
        />
      )}
    </div>
  );
};

export default ProfessorPage;

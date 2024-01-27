import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProfessorTable from "../../components/Table/ProfessorTable/ProfessorTable";
import getLectureInfo from "../../utils/getLectureInfo";
import ProfessorHomePageModal from "../../components/Modal/ProfessorHomePageModal/ProfessorHomePageModal";
import style from "./ProfessorHomePage.module.css";

const ProfessorPage = ({ userInfo }) => {
  const lectureInfo = getLectureInfo();
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.titleContainer}>내 강의</div>
      <div className={style.contentContainer}>
        <div className={style.tableContainer}>
          <ProfessorTable lectureInfo={lectureInfo} />
        </div>
        <div className={style.buttonContainer}>
          <Button
            placeholder={"강의 추가"}
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      </div>
      {showModal && <ProfessorHomePageModal setShowModal={setShowModal} />}
    </div>
  );
};

export default ProfessorPage;

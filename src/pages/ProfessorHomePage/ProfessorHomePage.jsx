import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProfessorTable from "../../components/Table/ProfessorTable/ProfessorTable";
import { getLectureInfoByProf } from "../../utils/getLectureInfo";
import AddLectureModal from "../../components/Modal/AddLectureModal/AddLectureModal";
import AddPostModal from "../../components/Modal/AddPostModal/AddPostModal";
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
  const [showAddLectureModal, setShowAddLectureModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [lectureId, setLectureId] = useState(0);

  return (
    <div>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.headerContainer}>
        <div className={style.titleContainer}>강의목록</div>
        <div className={style.myLectureContainer}>
          <Button
            placeholder={"강의추가"}
            onClick={() => {
              setShowAddLectureModal(true);
            }}
          />
        </div>
      </div>
      <div className={style.tableContainer}>
        <ProfessorTable
          lectureInfoByProf={lectureInfoByProf}
          setShowAddPostModal={setShowAddPostModal}
          setLectureId={setLectureId}
        />
      </div>
      {showAddLectureModal && (
        <AddLectureModal
          setShowAddLectureModal={setShowAddLectureModal}
          userName={userInfo.name}
          setRender={setRender}
        />
      )}
      {showAddPostModal && (
        <AddPostModal
          setShowAddPostModal={setShowAddPostModal}
          lectureId={lectureId}
          profName={userInfo.name}
          lectureInfoByProf={lectureInfoByProf}
          setRender={setRender}
        />
      )}
    </div>
  );
};

export default ProfessorPage;

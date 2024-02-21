import { useState } from "react";
import addLecture from "../../../utils/setLectureInfo/addLecture";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import style from "./AddLectureModal.module.css";

const AddLectureModal = ({ setShowAddLectureModal, setRender, userName }) => {
  const [lectureCode, setLectureCode] = useState(null);
  const [lectureName, setLectureName] = useState(null);
  const [lectureTime, setLectureTime] = useState(null);
  const onRegisterButtonClickHandler = async (
    userName,
    lectureCode,
    lectureName,
    lectureTime
  ) => {
    const req = [userName, lectureCode, lectureName, lectureTime];
    if (req.includes("") || req.includes(null)) {
      alert("빈 항목이 있습니다.");
    } else {
      const ret = await addLecture(
        userName,
        lectureCode,
        lectureName,
        lectureTime
      );
      if (ret === 1) {
        alert("등록되었습니다");
        setShowAddLectureModal(false);
        setRender(1);
      } else alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.headerContainer}>
          <div className={style.titleContainer}>강의 추가하기</div>
          <div className={style.closeButtonContainer}>
            <Button
              placeholder={"X"}
              onClick={() => {
                setShowAddLectureModal(false);
              }}
            />
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.content}>
            <div className={style.inputContainer}>
              <Input placeholder={"과목코드"} writtenText={setLectureCode} />
            </div>
            <div className={style.inputContainer}>
              <Input placeholder={"과목명"} writtenText={setLectureName} />
            </div>
            <div className={style.inputContainer}>
              <Input placeholder={"시간"} writtenText={setLectureTime} />
            </div>
            <div className={style.registerButtonContainer}>
              <Button
                placeholder={"등록하기"}
                onClick={() => {
                  onRegisterButtonClickHandler(
                    userName,
                    lectureCode,
                    lectureName,
                    lectureTime
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLectureModal;

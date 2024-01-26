import Button from "../../Button/Button";
import Input from "../../Input/Input";
import style from "./ProfessorHomePageModal.module.css";

const ProfessorHomePageModal = ({ setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.headerContainer}>
          <div className={style.title}>강의 추가하기</div>
          <div className={style.button}>
            <Button
              placeholder={"X"}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.content}>
            <Input placeholder={"과목 명"} />
            <Input placeholder={"시간"} />
            <Button placeholder={"등록하기"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorHomePageModal;

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import style from "./ProfessorHomePageModal.module.css";

const ProfessorHomePageModal = ({ setShowModal }) => {
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.headerContainer}>
          <div className={style.titleContainer}>강의 추가하기</div>
          <div className={style.closeButtonContainer}>
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
            <div className={style.inputContainer}>
              <Input placeholder={"과목코드"} />
            </div>
            <div className={style.inputContainer}>
              <Input placeholder={"과목명"} />
            </div>
            <div className={style.inputContainer}>
              <Input placeholder={"시간"} />
            </div>
            <div className={style.registerButtonContainer}>
              <Button
                placeholder={"등록하기"}
                onClick={() => {
                  alert("hi");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorHomePageModal;

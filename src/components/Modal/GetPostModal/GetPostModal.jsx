import Button from "../../Button/Button";
import style from "./GetPostModal.module.css";
import DraftEditor from "../../DraftEditor/DraftEditor";
import { useEffect, useState } from "react";

// const GetPostModal = ({ setShowPostModal, lectureInfo }) => {
const GetPostModal = ({
  setShowPostModal,
  lectureId,
  lectureInfo,
  setRender,
}) => {
  useEffect(() => {
    setRender(1);
  }, []);

  const profPost = lectureInfo[lectureId].PROF_POST;
  const [quillValue, setQuillValue] = useState(
    profPost.slice(1, profPost.length - 1)
  );

  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.headerContainer}>
          <div className={style.titleContainer}>게시물 보기</div>
          <div className={style.buttonContainer}>
            <div className={style.closeButtonContainer}>
              <Button
                placeholder={"X"}
                onClick={() => {
                  setShowPostModal(false);
                }}
              />
            </div>
          </div>
        </div>

        <div className={style.draftEditorContainer}>
          <DraftEditor quillValue={quillValue} setQuillValue={setQuillValue} />
        </div>
      </div>
    </div>
  );
};

export default GetPostModal;

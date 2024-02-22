import DraftEditor from "../../DraftEditor/DraftEditor";
import Button from "../../Button/Button";
import { useEffect, useState } from "react";
import style from "./AddPostModal.module.css";
import addPost from "../../../utils/setLectureInfo/addPost";

const AddPostModal = ({
  setShowAddPostModal,
  lectureId,
  profName,
  lectureInfoByProf,
  setRender,
}) => {
  const [quillValue, setQuillValue] = useState();
  useEffect(() => {
    const text = lectureInfoByProf[lectureId].PROF_POST;
    setQuillValue(text.slice(1, text.length - 1));
  }, []);
  const onPostSaveButtonClickHandler = async () => {
    const result = await addPost(lectureId, profName, quillValue);
    if (result === 1) {
      alert("저장되었습니다!");
      setShowAddPostModal(false);
      setQuillValue("");
      setRender(1);
    } else {
      alert("알 수 없는 이유로 저장되지 않았습니다.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.headerContainer}>
          <div className={style.titleContainer}>게시물 작성하기</div>
          <div className={style.buttonContainer}>
            <div className={style.saveButtonContainer}>
              <Button
                placeholder={"저장"}
                onClick={onPostSaveButtonClickHandler}
              />
            </div>
            <div className={style.closeButtonContainer}>
              <Button
                placeholder={"X"}
                onClick={() => {
                  setShowAddPostModal(false);
                }}
              />
            </div>
          </div>
        </div>

        <div className={style.draftEditorContainer}>
          <DraftEditor
            className={style.draftEditor}
            quillValue={quillValue}
            setQuillValue={setQuillValue}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;

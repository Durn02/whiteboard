import style from "./ProfessorTable.module.css";
import Button from "../../Button/Button";

const ProfessorTable = ({
  lectureInfoByProf,
  setShowAddPostModal,
  setLectureId,
}) => {
  const onTableClickHandler = (member) => {
    alert(member);
  };
  const onPostButtonClickHandler = (lectureId) => {
    setShowAddPostModal(true);
    setLectureId(lectureId);
  };
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>과목코드</th>
          <th>과목명</th>
          <th>시간</th>
          <th>담당교수</th>
          <th></th>
        </tr>
      </thead>
      {lectureInfoByProf?.map((lecture, i) => {
        return (
          <tbody
            key={i}
            onDoubleClick={() => {
              onTableClickHandler(lecture.MEMBER);
            }}
          >
            <tr className={style.body}>
              <td>{lecture.LECTURE_CODE}</td>
              <td>{lecture.LECTURE_NAME}</td>
              <td>{lecture.LECTURE_TIME}</td>
              <td>{lecture.PROFESSOR}</td>
              <td>
                <div className={style.buttonContainer}>
                  <Button
                    placeholder={"게시물"}
                    onClick={() => {
                      onPostButtonClickHandler(i);
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProfessorTable;

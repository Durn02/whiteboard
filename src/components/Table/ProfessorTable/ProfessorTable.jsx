import style from "./ProfessorTable.module.css";

const ProfessorTable = ({ lectureInfoByProf }) => {
  const onTableClickHandler = (member) => {
    alert(member);
  };
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>과목코드</th>
          <th>과목명</th>
          <th>시간</th>
          <th>담당교수</th>
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
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProfessorTable;

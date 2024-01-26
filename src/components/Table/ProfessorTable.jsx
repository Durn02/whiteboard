import style from "./ProfessorTable.module.css";

const ProfessorTable = ({ lectureInfo }) => {
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
      {lectureInfo.map((lecture, i) => {
        return (
          <tbody key={i}>
            <tr className={style.body}>
              <td>{lecture.code}</td>
              <td>{lecture.name}</td>
              <td>{lecture.time}</td>
              <td>{lecture.prof}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProfessorTable;

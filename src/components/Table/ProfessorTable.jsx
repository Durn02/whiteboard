import style from "./ProfessorTable.module.css";

const ProfessorTable = () => {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>과목코드</th>
          <th>과목명</th>
          <th>시간</th>
        </tr>
      </thead>
      <tbody>
        <tr className={style.body}>
          <td>COSE1111</td>
          <td>컴퓨터프로그래밍1</td>
          <td>화1 목1</td>
        </tr>
        <tr className={style.body}>
          <td>COSE1111</td>
          <td>컴퓨터프로그래밍1</td>
          <td>화1 목1</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfessorTable;

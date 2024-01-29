import Button from "../../Button/Button";
import style from "./StudentTable.module.css";

const StudentTable = ({ lectureInfo, userInfo }) => {
  var rowColor = style.bodyContainer;
  return (
    <table className={style.tableContainer}>
      <thead className={style.headContainer}>
        <tr>
          <th>과목코드</th>
          <th>과목명</th>
          <th>시간</th>
          <th>담당교수</th>
          <th></th>
        </tr>
      </thead>
      {lectureInfo.map((lecture, i) => {
        lecture.member.includes(userInfo.name)
          ? (rowColor = style.bodyContainer)
          : (rowColor = style.registeredBodyContainer);
        return (
          <tbody key={i} className={rowColor}>
            <tr>
              <td>{lecture.code}</td>
              <td>{lecture.name}</td>
              <td>{lecture.time}</td>
              <td>{lecture.prof}</td>
              <td>
                <div className={style.buttonContainer}>
                  <Button
                    placeholder={"신청"}
                    onClick={() => {
                      alert("clicked!");
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
export default StudentTable;

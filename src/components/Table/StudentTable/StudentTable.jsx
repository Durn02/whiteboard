import AddMember from "../../../utils/setLectureInfo/AddMember";
import Button from "../../Button/Button";
import style from "./StudentTable.module.css";

const Rows = ({ index, lecture, rowColor, userName }) => {
  return (
    <tbody className={rowColor}>
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
                const ret = AddMember(index, userName);
                if (ret === 1) alert("신청되었습니다!");
                else if (ret === 0) alert("이미 신청한 강의입니다!");
                else
                  alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요");
              }}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

const StudentTable = ({ lectureInfo, userInfo, showMyLecture }) => {
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
      {!showMyLecture && // 전체강의 다 보여줘
        lectureInfo.map((lecture, i) => {
          lecture.member.includes(userInfo.name)
            ? (rowColor = style.registeredBodyContainer)
            : (rowColor = style.bodyContainer);
          return (
            <Rows
              key={i}
              index={i}
              lecture={lecture}
              rowColor={rowColor}
              userName={userInfo.name}
            />
          );
        })}
      {showMyLecture && // 내 강의만 보여줘
        lectureInfo.map((lecture, i) => {
          rowColor = style.registeredBodyContainer;
          return lecture.member.includes(userInfo.name) ? (
            <Rows
              key={i}
              index={i}
              lecture={lecture}
              rowColor={rowColor}
              userName={userInfo.name}
            />
          ) : null;
        })}
    </table>
  );
};
export default StudentTable;

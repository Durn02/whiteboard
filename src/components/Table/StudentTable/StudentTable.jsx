import addMember from "../../../utils/setLectureInfo/addMember";
import Button from "../../Button/Button";
import style from "./StudentTable.module.css";

const onRegisterBttonClickHandler = (index, userName, setRender) => {
  const ret = addMember(index, userName);
  ret.then((result) => {
    if (result === 1) alert("신청되었습니다!");
    else if (result === 0) alert("이미 신청한 강의입니다!");
    else alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요");
    // console.log(result);
    setRender(1);
  });
};

const Rows = ({ index, lecture, rowColor, userName, setRender }) => {
  return (
    <tbody className={rowColor}>
      <tr>
        <td>{lecture.LECTURE_CODE}</td>
        <td>{lecture.LECTURE_NAME}</td>
        <td>{lecture.LECTURE_TIME}</td>
        <td>{lecture.PROFESSOR}</td>
        <td>
          <div className={style.buttonContainer}>
            <Button
              placeholder={"신청"}
              onClick={() => {
                onRegisterBttonClickHandler(index, userName, setRender);
              }}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

const StudentTable = ({ lectureInfo, userInfo, showMyLecture, setRender }) => {
  let rowColor = style.bodyContainer;

  // const getRowColor = (rowColor) => {
  //   return style
  // }
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
        lectureInfo?.map((lecture, i) => {
          lecture.MEMBER.includes(userInfo.name)
            ? (rowColor = style.registeredBodyContainer)
            : (rowColor = style.bodyContainer);
          return (
            <Rows
              key={i}
              index={i}
              lecture={lecture}
              rowColor={rowColor}
              userName={userInfo.name}
              setRender={setRender}
            />
          );
        })}
      {showMyLecture && // 내 강의만 보여줘
        lectureInfo?.map((lecture, i) => {
          rowColor = style.registeredBodyContainer;
          return lecture.MEMBER.includes(userInfo.name) ? (
            <Rows
              key={i}
              index={i}
              lecture={lecture}
              rowColor={rowColor}
              userName={userInfo.name}
              setRender={setRender}
            />
          ) : null;
        })}
    </table>
  );
};
export default StudentTable;

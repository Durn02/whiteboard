import getLectureInfo from "../getLectureInfo";

const AddMember = (lectureId, userName) => {
  var lectureInfo = getLectureInfo();
  if (lectureInfo[lectureId].member.includes(userName)) {
    return 0;
  }
  lectureInfo[lectureId].member.push(userName);
  // db insert로직 inset 실패하면 return -1할 것
  return 1;
};

export default AddMember;

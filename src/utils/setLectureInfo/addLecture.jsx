import axios from "axios";

const addLecture = (userName, lectureCode, lectureName, lectureTime) => {
  return axios
    .post("http://localhost:8080/addLecture", {
      userName,
      lectureCode,
      lectureName,
      lectureTime,
    })
    .then((result) => {
      const ret = result.data;
      return ret;
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
};

export default addLecture;

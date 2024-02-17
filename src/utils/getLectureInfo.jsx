import axios from "axios";

const getLectureInfo = () => {
  return axios
    .get("http://localhost:8080/getLectureInfo")
    .then((result) => {
      if (!result) {
        console.log("db에서 조회가 되지 않았습니다.");
        return 0;
      } else {
        return result.data;
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
};

const getLectureInfoByProf = (profName) => {
  return axios
    .post("http://localhost:8080/getLectureInfoByProf", { profName })
    .then((result) => {
      if (!result) {
        console.log("db에서 조회가 되지 않았습니다.");
        return 0;
      } else {
        const lectureInfoByProf = result.data;
        return lectureInfoByProf;
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
};

export { getLectureInfo, getLectureInfoByProf };

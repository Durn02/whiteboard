import axios from "axios";

const getLectureInfo = () => {
  return axios
    .get("http://localhost:8080/getLectureInfo")
    .then((result) => {
      if (!result) {
        console.log("db에서 조회가 되지 않았습니다.");
        return 0;
      } else {
        const lectureInfo = result.data;
        return lectureInfo;
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
  // const getLectureInfo = (userName) => {
  // 서버에서 userName에 따라 다른 lectureInfo를 받아오는 로직 구현해야됨
  // const lectureInfo = [
  //   {
  //     code: "COSE1111",
  //     name: "컴퓨터프로그래밍1",
  //     time: "화1 목1",
  //     prof: "두1",
  //     member: "["두1", "두2", "두4"]",
  //   },
  //   {
  //     code: "COSE4111",
  //     name: "컴퓨터프로그래밍10",
  //     time: "화1 목9",
  //     prof: "두1",
  //     member: ["두2", "두4", "두6", "두8"],
  //   },
  //   {
  //     code: "COSE4113",
  //     name: "컴퓨터프로그래밍11",
  //     time: "화9 목9",
  //     prof: "두1",
  //     member: ["두2", "두9", "두6", "두10"],
  //   },
  //   {
  //     code: "COSE4123",
  //     name: "컴퓨터프로그래밍7",
  //     time: "월9 수9",
  //     prof: "두1",
  //     member: ["두9", "두1"],
  //   },
  //   {
  //     code: "COSE4313",
  //     name: "컴퓨터프로그래밍71",
  //     time: "금9 수9",
  //     prof: "두1",
  //     member: ["두9", "두8", "두1"],
  //   },
  // ];
  // return lectureInfo;
};

export default getLectureInfo;

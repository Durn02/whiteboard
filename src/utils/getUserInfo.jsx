import axios from "axios";

const getUserInfo = (signInId, signInPw) => {
  return axios
    .get("http://localhost:8080/getuserInfo")
    .then((result) => {
      // console.log(result.data);
      const userInfo = result.data;
      // console.log(userInfo);
      if (userInfo.id === signInId && userInfo.pw === signInPw) return userInfo;
      else {
        return 0;
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
  // const userInfo = {
  //   name: "두10",
  //   id: "cdh",
  //   pw: "1234",
  //   student_number: "20211",
  //   isStudent: "Y",
  // };
  // alert(userInfo.name);
  // return 0;
};

export default getUserInfo;

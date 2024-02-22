import axios from "axios";

const getUserInfo = (signInId, signInPw) => {
  return axios
    .post("http://localhost:8080/getUserInfo", { signInId, signInPw })
    .then((result) => {
      if (result.data === 0) {
        return 0;
      } else {
        const userInfo = result.data;
        return userInfo;
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
};

export default getUserInfo;

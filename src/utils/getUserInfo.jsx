import axios from "axios";

const getUserInfo = (signInId, signInPw) => {
  return axios
    .post("http://localhost:8080/getUserInfo", { signInId, signInPw })
    .then((result) => {
      if (!result) {
        console.log("db에서 조회가 되지 않았습니다.");
        return 0;
      } else {
        const userInfo = result.data;
        if (userInfo.id === signInId && userInfo.pw === signInPw)
          return userInfo;
        else {
          return 0;
        }
      }
    })
    .catch(() => {
      alert("db 접속에 실패했습니다.");
      return 0;
    });
};

export default getUserInfo;

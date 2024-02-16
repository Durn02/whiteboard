import axios from "axios";

const createUserInfo = (
  signUpId,
  signUpPw,
  signUpName,
  signUpNumber,
  signUpIsStudent
) => {
  return axios
    .post("http://localhost:8080/createUserInfo", {
      signUpId,
      signUpPw,
      signUpName,
      signUpNumber,
      signUpIsStudent,
    })
    .then((result) => {
      return result.data;
    });
};

export default createUserInfo;

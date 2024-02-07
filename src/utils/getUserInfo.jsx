// import getUserInfo_back from "../backend/test";

const getUserInfo = (signInId, signInPw) => {
  const userInfo = {
    name: "두10",
    id: "cdh",
    pw: "1234",
    student_number: "20211",
    isStudent: "Y",
  };
  // const userInfo = getUserInfo_back(signInId, signInPw);
  if (userInfo.id === signInId && userInfo.pw === signInPw) return userInfo;
  // const userInfo = {};
  // if (Object.keys(userInfo).length === 5) return userInfo;
  return 0;
};

export default getUserInfo;

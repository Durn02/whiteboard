import axios from "axios";

const addMember = (lectureId, userName) => {
  return axios
    .post("http://localhost:8080/addLectureMember", { lectureId, userName })
    .then((result) => {
      return result.data;
    });
};

export default addMember;

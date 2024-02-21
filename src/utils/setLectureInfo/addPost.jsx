import axios from "axios";

const addPost = (lectureId, profName, postContent) => {
  //lectureId는 선택된 강의가 목록에서 몇 번째인지를 가리키는 값
  return axios
    .post("http://localhost:8080/addPost", {
      lectureId,
      profName,
      postContent,
    })
    .then((result) => {
      return result.data;
    });
};

export default addPost;

const getLectureInfo = () => {
  // 서버에서 받아오는 로직 구현해야됨
  const lectureInfo = [
    {
      code: "COSE1111",
      name: "컴퓨터프로그래밍1",
      time: "화1 목1",
      prof: "두",
      member: ["두1", "두2", "두4"],
    },
    {
      code: "COSE4111",
      name: "컴퓨터프로그래밍10",
      time: "화1 목9",
      prof: "두",
      member: ["두2", "두4", "두6", "두8"],
    },
  ];
  return lectureInfo;
};

export default getLectureInfo;

const express = require("express");
const { encryptPw } = require("./util/encryptPw");
const { verifyPw } = require("./util/verifyPw");
const path = require("path");
const mysql = require("mysql2/promise");
var cors = require("cors");
const DB_HOST = "localhost";
const DB_PORT = 3306;
const DB_USER = "dhdh";
const DB_PASS = "hellohello";
const DB_NAME = "whiteboard";

const pool = mysql.createPool({
  host: DB_HOST || "localhost",
  port: DB_PORT || 3306,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

const app = express();
app.listen(8000, function () {
  console.log("listening on 8000");
});
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build/")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const runQuery = async (pstmt, data) => {
  const conn = await pool.getConnection();
  try {
    const sql = conn.format(pstmt, data);
    const [result] = await conn.query(sql);
    return result;
  } finally {
    conn.release();
  }
};
const getUserInfoDB = async (user_id, signInPw) => {
  const sql = "SELECT * FROM USER_INFO WHERE USER_ID='" + user_id + "';";
  const results = await runQuery(sql);
  if (results.length === 0) {
    return 0;
  } else {
    await results.forEach(async (element) => {
      const verify = await verifyPw(signInPw, element.USER_PW);
      if (verify === 0) {
        return element;
      }
    });
    return results;
  }
};

app.post("/getUserInfo", async function (req, res) {
  const { signInId, signInPw } = req.body;
  const stats = await getUserInfoDB(signInId, signInPw);
  if (stats === 0) {
    res.json(0);
  } else {
    stats.forEach((stat) => {
      const { USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN } = stat;
      const userInfo = {
        name: USER_NAME,
        id: USER_ID,
        pw: USER_PW,
        student_number: USER_NUMBER,
        isStudent: STUDENT_YN,
      };
      res.json(userInfo);
    });
  }
});

const getLectureInfo = async () => {
  const sql = "SELECT * FROM lecture_info;";
  const results = await runQuery(sql);
  return results;
};

app.get("/getLectureInfo", async function (req, res) {
  const lectures = await getLectureInfo();
  res.json(lectures);
});

const addLectureMember = async (lectureCode, professor, new_member) => {
  const sql =
    "UPDATE lecture_info SET MEMBER = '" +
    new_member +
    "' WHERE LECTURE_CODE='" +
    lectureCode +
    "' and PROFESSOR='" +
    professor +
    "';";
  await runQuery(sql);
};
app.post("/addLectureMember", async function (req, res) {
  const { lectureId, userName } = req.body;
  const lectures = await getLectureInfo();
  if (lectures[lectureId].MEMBER.includes(userName)) {
    res.json(0);
  } else {
    const lectureCode = lectures[lectureId].LECTURE_CODE;
    const professor = lectures[lectureId].PROFESSOR;

    const origin_member = JSON.parse(lectures[lectureId].MEMBER);
    const new_member = JSON.stringify([...origin_member, userName]);
    addLectureMember(lectureCode, professor, new_member);
    res.json(1);
  }
});

const createUserInfo = async (
  signUpId,
  hashedsignUpPw,
  signUpName,
  signUpNumber,
  signUpIsStudent
) => {
  const sql =
    "INSERT INTO user_info values('" +
    signUpId +
    "', '" +
    hashedsignUpPw +
    "', '" +
    signUpName +
    "', '" +
    signUpNumber +
    "', '" +
    signUpIsStudent +
    "')";
  await runQuery(sql);
};

app.post("/createUserInfo", async function (req, res) {
  const { signUpId, signUpPw, signUpName, signUpNumber, signUpIsStudent } =
    req.body;
  const req2arr = Object.values(req.body);
  if (
    req2arr.includes("") === true ||
    req2arr.includes(undefined) === true ||
    req2arr.length < 5
  ) {
    res.json(-1);
  } else {
    const isAlreadyRegisterd = await getUserInfoDB(signUpId, signUpPw);
    if (isAlreadyRegisterd === 0) {
      const hashedsignUpPw = await encryptPw(signUpPw);
      createUserInfo(
        signUpId,
        hashedsignUpPw,
        signUpName,
        signUpNumber,
        signUpIsStudent
      );
      res.json(1);
    } else {
      res.json(-2);
    }
  }
});

const getLectureInfoByProf = async (profName) => {
  const sql = "select * from lecture_info where PROFESSOR='" + profName + "';";
  const result = await runQuery(sql);
  return result;
};

app.post("/getLectureInfoByProf", async function (req, res) {
  const { profName } = req.body;
  const lectureInfoByProf = await getLectureInfoByProf(profName);
  res.json(lectureInfoByProf);
});

const addLecture = async (userName, lectureCode, lectureName, lectureTime) => {
  const sql =
    "insert into lecture_info values('" +
    lectureCode +
    "', '" +
    lectureName +
    "', '" +
    lectureTime +
    "', '" +
    userName +
    "', '[]', '')";
  await runQuery(sql);
};

app.post("/addLecture", async function (req, res) {
  const { userName, lectureCode, lectureName, lectureTime } = req.body;
  addLecture(userName, lectureCode, lectureName, lectureTime);
  res.json(1);
});

const addPost = async (lectureId, userName, postContent) => {
  const lectures = await getLectureInfoByProf(userName);
  // console.log(userName);
  const sql =
    "UPDATE lecture_info SET PROF_POST='" +
    JSON.stringify(postContent) +
    "' WHERE LECTURE_CODE='" +
    lectures[lectureId].LECTURE_CODE +
    "' and PROFESSOR='" +
    lectures[lectureId].PROFESSOR +
    "';";
  await runQuery(sql);

  // lectures[lectureId].PROF_POST
};

app.post("/addPost", async function (req, res) {
  const { lectureId, profName, postContent } = req.body;
  // console.log(lectureId, profName, postContent);
  addPost(lectureId, profName, postContent);
  res.json(1);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

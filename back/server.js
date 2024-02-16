const express = require("express");
const path = require("path");
var cors = require("cors");
const mysql = require("mysql2/promise");
const DB_HOST = "localhost";
const DB_PORT = 3306;
const DB_USER = "root";
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
app.listen(8080, function () {
  console.log("listening on 8080");
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
const getUserInfoDB = async (user_id, user_pw) => {
  const sql =
    "SELECT * FROM USER_INFO WHERE USER_ID='" +
    user_id +
    "' AND USER_PW='" +
    user_pw +
    "';";
  const results = await runQuery(sql);
  // console.log(results);
  if (results.length === 0) {
    // console.log("계정 정보 없음");
    return 0; // 계정 정보 입력 잘못됨
  } else return results;
};

app.post("/getUserInfo", async function (req, res) {
  const { signInId, signInPw } = req.body;
  const stats = await getUserInfoDB(signInId, signInPw);
  if (stats === 0) {
    res.json({ status: "not found" });
  } else {
    stats.forEach((stat) => {
      const { USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN } = stat;
      // console.log(USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN);
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
  // console.log(lectures);
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
  signUpPw,
  signUpName,
  signUpNumber,
  signUpIsStudent
) => {
  const sql =
    "INSERT INTO user_info values('" +
    signUpId +
    "', '" +
    signUpPw +
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
  // console.log(req.body);
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
      createUserInfo(
        signUpId,
        signUpPw,
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

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

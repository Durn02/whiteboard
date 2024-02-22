// const mysql = require("mysql2/promise");
// // const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;
// const DB_HOST = "localhost";
// const DB_PORT = 3306;
// const DB_USER = "root";
// const DB_PASS = "hellohello";
// const DB_NAME = "whiteboard";

// const pool = mysql.createPool({
//   host: DB_HOST || "localhost",
//   port: DB_PORT || 3306,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME,
// });

// const runQuery = async (pstmt, data) => {
//   const conn = await pool.getConnection();
//   try {
//     const sql = conn.format(pstmt, data);
//     const [result] = await conn.query(sql);
//     return result;
//   } finally {
//     conn.release();
//   }
// };
// const getUserInfo_back = async (user_id, user_pw) => {
//   const sql =
//     "SELECT * FROM USER_INFO WHERE USER_ID='" +
//     user_id +
//     "' AND USER_PW='" +
//     user_pw +
//     "';";
//   const results = await runQuery(sql);
//   return results;
// };
// (async function info_test() {
//   const stats = await getUserInfo_back("cdh", "1234");
//   stats.forEach((stat) => {
//     const { USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN } = stat;
//     console.log(USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN);
//     const userInfo = {
//       name: USER_NAME,
//       id: USER_ID,
//       pw: USER_PW,
//       student_number: USER_NUMBER,
//       isStudent: STUDENT_YN,
//     };
//     return userInfo;
//   });
// })();
// // (async function info() {
// //   const stats = await getUserInfo_back("cdh", "1234");
// //   stats.forEach((stat) => {
// //     const { USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN } = stat;
// //     console.log(USER_ID, USER_PW, USER_NAME, USER_NUMBER, STUDENT_YN);

// //   });
// // })();

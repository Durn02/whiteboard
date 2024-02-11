const express = require("express");
const path = require("path");
var cors = require("cors");

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

app.get("/getuserInfo", function (req, res) {
  res.json({
    name: "두10",
    id: "cdh",
    pw: "1234",
    student_number: "20211",
    isStudent: "Y",
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

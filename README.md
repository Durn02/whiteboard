# whiteboard 프로젝트

<a href="https://ko.legacy.reactjs.org/">
  <img height="20" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"/>
</a>
<a href="">
  <img height="20" src="https://img.shields.io/badge/CSSModules-000000?style=flat&logo=cssmodules&logoColor=white"/>
</a>
<a href="">
<img height="20" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"/>
</a>
<a href="https://nodejs.org/en">
  <img height="20" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=black"/>
</a>
<a href="https://www.mysql.com/">
  <img height="20" src="https://img.shields.io/badge/Mysql-4479A1?style=flat&logo=mysql&logoColor=black"/>
</a>

## 1. 개요

> ### 수강신청 웹 애플리케이션, 고려대학교 blackboard 뛰어넘기

## 2. 기능

- 회원가입 : 비밀번호는 암호화 해서 db에 저장
- 회원가입 수집 항목: 아이디, 비밀번호, 이름, 학번, 교수자/학생 여부
- 교수자 : 강의 등록, 게시물 작성, 수강 중인 학생 확인
- 학생 : 강의 수강 신청, 신청한 강의 확인, 강의별 게시물 확인

## 3. 환경 세팅

- (경로) -> (명령어)

1. 터미널 -> `git clone https://github.com/Durn02/whiteboard.git`
2. mysql 설치
3. mysql -> whiteboard/back/schema/schema.sql 작성
4. whiteboard/ -> `npm install`, `npm run build`
5. whiteboard/back -> `npm start`
6. localhost:8080 접속(실패 시 8080이 이미 사용중인지 확인 해 볼 것)

## 4. 사용 방법

"교수자"

1. 회원가입(학번은 아무 숫자나 입력)
1. 로그인
1. 내 페이지로 이동
1. 강의 추가(과목코드, 과목명, 시간)
1. 추가된 강의에 '게시물'버튼을 통해 게시물 작성
1. 자신이 개설한 강의 행을 더블클릭하여 수강 중인 학생 조회

"학생"

1. 회원가입
1. 로그인
1. 내 페이지로 이동
1. '신청'버튼으로 강의 신청
1. '전체강의'버튼으로 등록되어있는 모든 강의 확인
1. '내 강의'버튼으로 내가 신청한 강의 확인
1. 강의 행을 더블 클릭하여 작성된 게시물 확인

-- 1. create user
CREATE USER 'dhdh'@'%' IDENTIFIED BY 'hellohello';

-- 2. CREATE DATABASE
CREATE DATABASE whiteboard;

CREATE TABLE IF NOT EXISTS `user_info` (
      `USER_ID` varchar(30) NOT NULL COMMENT '유저 아이디'
    , `USER_PW` varchar(30) NOT NULL COMMENT '유저 비밀번호'
    , `USER_NAME` varchar(30) NOT NULL COMMENT '유저 본명'
    , `USER_NUMBER` varchar(30) COMMENT '유저 학번, 교수이면 null'
    , `STUDENT_YN` varchar(5) NOT NULL COMMENT '교수/학생 여부, 학생이면 Y'
    , PRIMARY KEY (`USER_ID`,`USER_PW`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='유저 정보'
;

CREATE TABLE IF NOT EXISTS `lecture_info` (
      `LECTURE_CODE` varchar(30) NOT NULL COMMENT '과목 코드'
    , `LECTURE_NAME` varchar(30) NOT NULL COMMENT '과목명'
    , `LECTURE_TIME` varchar(30) NOT NULL COMMENT '수업 시간'
    , `PROFESSOR` varchar(30) NOT NULL COMMENT '교수명'
    , `MEMBER` TEXT NOT NULL COMMENT '수강 명단'
    , PRIMARY KEY (`LECTURE_CODE`, `PROFESSOR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='강의 정보'
;
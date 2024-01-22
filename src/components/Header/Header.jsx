import styles from "./Header.module.css";
import logo from "../../assets/images/icons/pencil.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = ({ logined, userInfo }) => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.headerContainer}>
            <img src={logo} className={styles.logo} />
            <div>WhiteBoard</div>
          </div>
        </Link>
        {!logined && (
          <div className={styles.headerContainer}>
            <Button placeholder={"로그인"} as="Link" to={"/signin"}></Button>
            <Button placeholder={"회원가입"} as="Link" to={"/signup"}></Button>
          </div>
        )}
        {logined && (
          <div className={styles.headerContainer}>
            <Button placeholder={userInfo.name}></Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

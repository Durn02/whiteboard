import styles from "./Header.module.css";
import logo from "../../assets/images/icons/pencil.png";
import Button from "../Button/Button";

const Header = ({ logined, userInfo }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer} onClick={() => alert("눌림")}>
          <img src={logo} className={styles.logo} />
          <div>WhiteBoard</div>
        </div>
        <></>
        {!logined && (
          <div className={styles.headerContainer}>
            <Button placeHolder={"로그인"}></Button>
            <Button placeHolder={"회원가입"}></Button>
          </div>
        )}
        {logined && (
          <div className={styles.headerContainer}>
            <Button placeHolder={userInfo.name}></Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

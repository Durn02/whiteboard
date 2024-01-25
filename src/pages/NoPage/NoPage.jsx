import { Link } from "react-router-dom";
import style from "./NoPage.module.css";

const NoPage = () => {
  return (
    <Link to="/">
      <div className={style.div}>404 🫠 not found</div>
      <div>ㅡ.ㅡ</div>
    </Link>
  );
};

export default NoPage;

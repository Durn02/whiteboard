import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProfessorTable from "../../components/Table/ProfessorTable";
import style from "./ProfessorPage.module.css";

const ProfessorPage = ({ userInfo }) => {
  return (
    <div>
      <Header logined={true} userInfo={userInfo} />
      <div className={style.container}>
        <div className={style.table}>
          <ProfessorTable />
        </div>
        <div className={style.button}>
          <Button placeholder={"내 강의"} />
        </div>
      </div>
    </div>
  );
};

export default ProfessorPage;

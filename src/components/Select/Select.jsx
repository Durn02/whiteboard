import style from "./Select.module.css";

const Select = () => {
  return (
    <select name="isStudent" className={style.select}>
      <option value="" disabled selected>
        교수자/학생
      </option>
      <option value="professor">교수자</option>
      <option value="student">학생</option>
    </select>
  );
};

export default Select;

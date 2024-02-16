import style from "./Select.module.css";

const Select = ({ writtenText }) => {
  return (
    <select
      name="isStudent"
      className={style.select}
      onChange={(e) => {
        writtenText(e.target.value);
      }}
    >
      <option value="N">교수자</option>
      <option value="Y">학생</option>
    </select>
  );
};

export default Select;

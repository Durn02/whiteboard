import Button from "../Button";
import style from "./SigninButton.module.css";

const SigninButton = ({ placeholder, onClick }) => {
  return (
    <div className={style.buttonContainer}>
      <Button placeholder={placeholder} onClick={onClick} />
    </div>
  );
};

export default SigninButton;

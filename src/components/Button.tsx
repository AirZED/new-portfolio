// importing style
import style from "./../styles/Button.module.css";

interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps): JSX.Element => {
  return (
    <button className={style.button} type="button">
      {content}
    </button>
  );
};

export default Button;

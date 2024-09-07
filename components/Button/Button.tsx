import { IconType } from "react-icons";

type ButtonType = {
  icon?: IconType;
  onclick?: () => void;
  label: string;
  type: "button" | "submit";
  style?: string;
};

const Button: React.FC<ButtonType> = ({
  icon,
  label,
  onclick,
  type,
  style,
}) => {
  return (
    <button className={style} type={type}>
      {label}
    </button>
  );
};

export default Button;

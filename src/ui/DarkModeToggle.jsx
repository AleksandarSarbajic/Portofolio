import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
function DarkModeToggle({ onClick }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon
      onClick={() => {
        onClick();
        toggleDarkMode();
      }}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;

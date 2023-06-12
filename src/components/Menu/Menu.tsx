import DarkmodeSlider from "../DarkmodeSlider/DarkmoreSlider";
import styles from "./Menu.module.css"

interface MenuProps {
  isDarkmode: boolean;
  setDarkmode: (dark: boolean) => void;
}

const Menu = ({isDarkmode, setDarkmode} : MenuProps) => {
  
  return (
    <menu className={`
      ${styles.container} 
      ${isDarkmode ? styles.darkmode: styles.lightmode}
    `}>
      <DarkmodeSlider isDarkmode={isDarkmode} setDarkmode={setDarkmode} />
    </menu>
  )
}

export default Menu;
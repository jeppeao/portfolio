import { useState } from "react";
import DarkmodeSlider from "../DarkmodeSlider/DarkmoreSlider";
import styles from "./Menu.module.css"
import {BiMenu} from "react-icons/bi"

interface MenuProps {
  isDarkmode: boolean;
  setDarkmode: (dark: boolean) => void;
}

const Menu = ({isDarkmode, setDarkmode} : MenuProps) => {
  const [menuOn, setMenuOn] = useState(false);

  const onMenuClick = () => {
    setMenuOn(!menuOn);
  }

  return (
    <div className={`
      ${styles.container} 
    `}>
      <menu className={`
        ${styles.menu}
        ${menuOn ? "" : styles.hide}
        ${isDarkmode ? styles.darkmode: styles.lightmode}
      `}>
        <DarkmodeSlider isDarkmode={isDarkmode} setDarkmode={setDarkmode} /> 
      </menu>
      <button 
        className={`
          ${styles.menubutton}
          ${isDarkmode ? styles.darkmode : styles.lightmode}
        `}
        onClick={onMenuClick}
      >
        <BiMenu 
          size={48} 
          className={`${isDarkmode ?  styles.darkmodetext: styles.lightmodetext}`}
        />
      </button>
    </div>
  )
}

export default Menu;
import { useState } from "react";
import DarkmodeSlider from "../DarkmodeSlider/DarkmoreSlider";
import styles from "./Menu.module.css"
import {BiMenu} from "react-icons/bi"
import { Projects, ProjectProps } from "../../const";


interface MenuProps {
  isDarkmode: boolean;
  setDarkmode: (dark: boolean) => void;
  goToProject: (nth: number) => void;
}

const Menu = ({isDarkmode, setDarkmode, goToProject} : MenuProps) => {
  const [menuOn, setMenuOn] = useState(false);
  const [projectMenuOn, setProjectMenuOn] = useState(false);
  
  const onMenuClick = () => {
    setMenuOn(!menuOn);
    setProjectMenuOn(false);
  }

  const onProjectMenuOnClick = () => {
    setProjectMenuOn(!projectMenuOn);
  }

  const onProjectClicked = (nth: number) => {
    setProjectMenuOn(false);
    goToProject(nth);
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
        <div>     
         <DarkmodeSlider isDarkmode={isDarkmode} setDarkmode={setDarkmode} /> 
        </div>
        <nav>
          <button 
            className={styles.projectsbutton}
            onClick={onProjectMenuOnClick}
          >
            Projects
          </button>
          <menu className={`
            ${styles.projectsmenu}
            ${isDarkmode ? styles.darkmode: styles.lightmode}
            ${projectMenuOn ? "" : styles.hide}
          `}>
            {
              Projects.map((p: ProjectProps, i: number) => {
                return (
                <a 
                  className={styles.menulink}
                  onClick={() => onProjectClicked(i)}
                >
                  {p.title}
                  
                </a>);
              }) 
            }
          </menu>
          <a href="#footer">Contact</a>
        </nav>
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
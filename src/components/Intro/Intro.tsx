import styles from "./Intro.module.css"
import { BsArrowDown, BsFillArrowDownCircleFill } from "react-icons/bs"

interface IntroProps {
  isDarkmode?: boolean;
  onArrowClick: () => void;
}
const Intro = ({onArrowClick, isDarkmode = true}: IntroProps) => {
  return (
    <div className={`
      ${styles.container}
      ${isDarkmode ? "darkmode" : "lightmode"}
    `}>
      <div className={`
        ${styles.textbox}
        ${isDarkmode ? "darkmode" : "lightmode"}
      `}>
        <h1>Hello,</h1>
        <h1>I'm Jeppe</h1>
        <p className={`
          ${styles.subheader}
          ${isDarkmode ? "dark-text-secondary" : "light-text-secondary"}
        `}>Below are some projects I've built while studying web development</p>
      </div>
      <div onClick={onArrowClick}>
      <BsFillArrowDownCircleFill size={48} className={styles.arrow}/>
      </div>
    </div>
  )
}

export default Intro;
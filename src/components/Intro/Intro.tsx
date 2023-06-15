import styles from "./Intro.module.css"

interface IntroProps {
  isDarkmode?: boolean
}
const Intro = ({isDarkmode = true}: IntroProps) => {
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


    </div>
  )
}

export default Intro;
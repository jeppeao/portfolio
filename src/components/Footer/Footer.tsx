import styles from "./Footer.module.css"
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

interface FooterProps {
  isDarkmode: boolean
}

const Footer = ({isDarkmode}: FooterProps) => {
  return (
    <div 
      className={`
        ${styles.container}
        ${isDarkmode ? styles.darkflip : styles.lightflip}
      `}
    >
      <a href="mailto: jeppeao@gmail.com">
      <div className={styles.item}>
        <MdOutlineEmail size={32}/>
        <span>jeppeao@gmail.com</span>
      </div>
      </a>

      <a href="https://github.com/jeppeao">
      <div className={styles.item}>
        <FaGithub size={32}/>
        <span>https://github.com/jeppeao</span>
      </div>  
      </a> 

    </div>
  )
}

export default Footer;
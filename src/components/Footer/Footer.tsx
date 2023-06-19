import styles from "./Footer.module.css"
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

interface FooterProps {
  isDarkmode: boolean
}

const Footer = ({isDarkmode}: FooterProps) => {
  return (
    <div 
      id="footer"
      className={`
        ${styles.container}
        ${isDarkmode ? styles.darkflip : styles.lightflip}
      `}
    >
      
      <div className={styles.item}>
      <a href="mailto: jeppeao@gmail.com">
        <MdOutlineEmail size={32}/>
        <span>jeppeao@gmail.com</span>
      </a>
      </div>
      

      
      <div className={styles.item}>
      <a href="https://github.com/jeppeao">
        <FaGithub size={32}/>
        <span>https://github.com/jeppeao</span>
      </a>
      </div>  
       

    </div>
  )
}

export default Footer;
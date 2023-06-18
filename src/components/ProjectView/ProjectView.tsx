import { BiLink } from "react-icons/bi";
import styles from "./ProectView.module.css"

export interface ProjectViewProps {
  isDarkmode: boolean;
  title: string;
  imgSrc: string;
  description: string;
  technologies: string[];
  repository: string;
  link: string;
}

const ProjectView = ({ 
  isDarkmode,
  title,
  imgSrc,
  description,
  technologies,
  repository,
  link,
} : ProjectViewProps) => {

  const descriptionBody = (
    <p>
      {description}
      {` Made using `}
      { 
        technologies.slice(0,-1).map((t: string) => {
          return (
            <span key={t}>
            <span 
            className={isDarkmode ? styles.darkemphasis : styles.lightemphasis} 
            >
              {t}
            </span>
            <span>, </span>
            </span>
          )
        })
      }
      { technologies.length > 1 &&
        <span> and </span>
      }
      
      <span 
        className={isDarkmode ? styles.darkemphasis : styles.lightemphasis} 
      >
        {technologies.slice(-1)}
      </span>
      <span>.</span>
      <span> Click on image or title to try the app.</span>
      <a href={repository}>
        <span
          className={styles.textlink} 
        > Click here to see the code.</span>
      </a>

    </p>
  )

  return (
    <div 
      className={`
        ${styles.container}
        ${isDarkmode ? "darkmode" : "lightmode"}
    `}>
      <div 
        className={`
          ${styles.content}
      `}>
        <a href={link} target="_blank">
          <div>
            <h3>
              {title}
              <BiLink size={24} color="dodgerblue" className={styles.linkicon}></BiLink>
            </h3>
          </div>
        </a>
        <a href={link} target="_blank">
        <img 
          src={imgSrc} 
          className={`${styles.image}`}
          width="100%"
        />
        </a>
        <div 
          className={`
          ${styles.description}
        `}>
          {descriptionBody}
        </div>
      </div>
    </div>
  )
}

export default ProjectView;
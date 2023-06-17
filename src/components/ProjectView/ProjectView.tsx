import styles from "./ProectView.module.css"

export interface ProjectViewProps {
  isDarkmode: boolean;
  title: string;
  imgSrc: string;
  description: string;
  technologies: string[];
}

const ProjectView = ({ 
  isDarkmode,
  title,
  imgSrc,
  description,
  technologies
} : ProjectViewProps) => {

  const descriptionBody = (
    <p>
      {description}
      {` Made using `}
      { 
        technologies.slice(0,-1).map((t: string) => {
          return (
            <>
            <span 
            className={isDarkmode ? styles.darkemphasis : styles.lightemphasis} 
            >
              {t}
            </span>
            <span>, </span>
            </>
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
        <h3>{title}</h3>
        <img 
          src={imgSrc} 
          className={`${styles.image}`}
          width="100%"
        />
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
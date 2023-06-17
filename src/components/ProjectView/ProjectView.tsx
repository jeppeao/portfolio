import styles from "./ProectView.module.css"

interface ProjectViewProps {
  isDarkmode: boolean;
  title: string;
  imgSrc: string;
  description: string;
}

const ProjectView = ({ 
  isDarkmode,
  title,
  imgSrc,
  description
} : ProjectViewProps) => {
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
        <p 
          className={`
          ${styles.description}
        `}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectView;
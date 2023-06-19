import { useRef, useState } from 'react'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import ProjectView from './components/ProjectView/ProjectView';
import { Projects } from './const';
import { ProjectProps } from './const';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  const projects = useRef<HTMLDivElement>(null);

  const scrollToProject = (nth: number) => {
    projects.current?.children[nth].scrollIntoView();
  }

  return (
    <>
      <Menu 
        isDarkmode={isDarkmode} 
        setDarkmode={setIsDarkmode}
        goToProject={scrollToProject}
      />
      <Intro 
        isDarkmode={isDarkmode} 
        onArrowClick={() => scrollToProject(0)}
      />
      <div ref={projects}>
      {
        Projects.map((p: ProjectProps, i: number) => {
          return (
          <ProjectView
            key={p.title}
            isDarkmode={isDarkmode}
            title={p.title}
            imgSrc={p.imgSrc}
            description={p.description}
            technologies={p.technologies}
            repository={p.repository}
            link={p.link}
            order={i}
            goToProject={scrollToProject}
          />
          );
        })
      }
      </div>
      <Footer isDarkmode={isDarkmode}/>
    </>
  )
}

export default App

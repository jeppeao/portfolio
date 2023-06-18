import { useState } from 'react'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import ProjectView from './components/ProjectView/ProjectView';
import { Projects } from './const';
import { ProjectProps } from './const';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  return (
    <>
      <Menu isDarkmode={isDarkmode} setDarkmode={setIsDarkmode}/>
      <Intro isDarkmode={isDarkmode}/>
      {
        Projects.map((p: ProjectProps) => {
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
          />
          );
        })
      }
      <Footer isDarkmode={isDarkmode}/>
    </>
  )
}

export default App

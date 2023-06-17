import { useState } from 'react'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import ProjectView from './components/ProjectView/ProjectView';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  return (
    <>
      <Menu isDarkmode={isDarkmode} setDarkmode={setIsDarkmode}/>
      <Intro isDarkmode={isDarkmode}/>
      <ProjectView 
        isDarkmode={isDarkmode}
        title={"Song Recommendations"}
        imgSrc={"/Top-recommendations.png"}
        description={"Find music based on spotify liked songs. This app will fetch recommendations for each of a user's liked songs on spotify and rank them on how many times they were recommended. Maybe the songs recommended over and over again are a match? Made using Next.js, tailwind and the spotify API."}
      />
      <Footer isDarkmode={isDarkmode}/>
    </>
  )
}

export default App

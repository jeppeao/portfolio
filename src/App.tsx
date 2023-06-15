import { useState } from 'react'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  return (
    <>
      <Menu isDarkmode={isDarkmode} setDarkmode={setIsDarkmode}/>
      <Intro isDarkmode={isDarkmode}/>
      <Footer isDarkmode={isDarkmode}/>
    </>
  )
}

export default App

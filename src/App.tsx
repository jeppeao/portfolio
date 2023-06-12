import { useState } from 'react'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true);
  return (
    <>
      <Menu isDarkmode={isDarkmode} setDarkmode={setIsDarkmode}/>
      <Intro isDarkmode={isDarkmode}/>
    </>
  )
}

export default App

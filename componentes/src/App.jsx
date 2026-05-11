import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Menu from './componentes/Menu'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Footer from './componentes/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

return(
  <div>
   <Navbar/>
   <Hero />
   <Footer />

  </div>
)
}

export default App



import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from "./components/MyWork/MyWork";
import Contact from './components/contact/Contact'



const App = ()  => {


  return (
    
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact  />
    
    </div>
  )
}

export default App

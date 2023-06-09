import Navbar from './components/NavBar'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/Herosection';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import {NoMatch} from './NoMatch';


const App = () => {

  
  return (
    <>
    <Router>
      <Navbar />
      <Routes path="/">
          <Route path="/about" element={<About />} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
    </Router>
    <HeroSection />
    
    </>
    
  )
}

export default App
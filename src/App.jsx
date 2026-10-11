import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Services from "./Components/Services"
import Skillstech from "./Components/Skills&tech"
import Projects from "./Components/Project"
import Footer from "./Components/footer"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


const locomotiveScroll = new LocomotiveScroll();

function App() {


  return (
    <>
    
      <div>
           
           
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div  id="skills">
          <Skillstech />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>


      </div>


    </>
  )



}


export default App
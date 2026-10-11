import styles from "./Footer.module.css";
import linkedin from "../assets/linkedin.png";
import upwork from "../assets/upwork.png";
import whatsapp from "../assets/whatsapp.png";
import githubfill from "../assets/githubfill.png";
import copyright from "../assets/copyright.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);



const Footer = () => {

     const container = useRef(null);

  useGSAP(()=>{
    
      const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
       toggleActions: "play none none reverse",
    }
  });

  tl.from(`.${styles.h3sss} , .${styles.lists} ul li , .${styles.imgssfooter} img`,{
     y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out"

  })
  tl.from(`.${styles.horizontalline} hr, .${styles.footertext}`,{
     y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out"

  })


  },{
    scope:container
  })

  return (
    <>
      <div ref={container} className={styles.parentdiv}>
        <div className={styles.footerparent}>

          <div className={styles.h3sss}>
            <h3>MERN Stack Developer</h3>
          </div>


          <div className={styles.lists}>
            <ul>
              <li className={styles.link}>
                <a href="#home">Home</a>
              </li>
              <li className={styles.link}>
                <a href="#about">About</a>
              </li>
              <li className={styles.link}>
                <a href="#services">Services</a>
              </li>
              <li className={styles.link}>
                <a href="#projects">Projects</a>
              </li>
              <li className={styles.link}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styles.link}>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>
          <div className={styles.imgssfooter}>
            <div>
             <a href="https://www.linkedin.com/in/sudais-ameen-283249337?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
             ><img src={linkedin} alt="linkedin" /></a> 
            </div>
            <div>
             <a href="https://www.upwork.com/freelancers/~010cc35ade3e5532bc?mp_source=share"
               target="_blank"
              rel="noopener noreferrer"
             ><img src={upwork} alt="upwork" /></a> 
            </div>
            <div>
             <a href="https://github.com/sudaisameen"
              target="_blank"
              rel="noopener noreferrer"
             ><img src={githubfill} alt="Github" /></a> 
            </div>
            <div>
              <a href="https://wa.me/923296970207?text=Hi%2C%20I%20would%20like%20to%20collaborate%20with%20you."
               target="_blank"
               rel="noopener noreferrer"
              ><img src={whatsapp} alt="Whatsapp" /></a>
            </div>

          </div>

        </div>


        <div className={styles.horizontalline}>
          <hr />
        </div>

        <div className={styles.footertext}>
          <p>Copyright <span><img src={copyright} alt="copyright" /></span>2026 Sudais Ameen | All Right Reserved</p>
        </div>

      </div>

    </>

  )

}

export default Footer







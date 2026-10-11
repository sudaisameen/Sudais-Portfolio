import styles from "./Home.module.css";
import profile from "../assets/profile.png";
import html from "../assets/html.png";
import arrow from "../assets/arrow.png"
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import { useRef } from "react";
import menuphone from "../assets/menuphone.png";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const container = useRef(null);

    useGSAP(()=>{
      const tl = gsap.timeline();

       tl.from(`.${styles.h3ss}, ul li , .${styles.button1}, hr`,{
        y:-20,
        opacity:0,
        duration:0.2,
        delay:0.2,
        stagger:0.2,
      },"anime")


      tl.from(`.${styles.h1ss}, .${styles.h2ss}, p`,{
       x:-200,
        opacity:0,
        duration:0.3,
        stagger:0.2,

      })
      tl.from(`.${styles.rightflex}`,{
          x:200,
        opacity:0,
        duration:0.5,

      },"-=1.5")

        tl.from(`.${styles.navbarparent} img `,{
          y:-100,
        opacity:0,
        duration:1,
          
      },"anime")

      tl.from(`.${styles.icon1}, .${styles.icon2}, .${styles.icon3}, .${styles.icon4}, .${styles.icon5}, .${styles.icon6}, .${styles.icon7} `,{
           x:100,
        opacity:0,
        duration:0.3,
        stagger:0.2,

      })
      tl.from(`.${styles.leftflex} button`,{
         y:0,
        opacity:0,
        duration:0.3,
        stagger:0.2,
      },"-=1")



    },{
         scope: container
    })

    return (
        <>


            <div ref={container} className={styles.parentdiv}>
                <div className={styles.navbarparent}>
                    <div onClick={() => {
                        setIsOpen(true)
                    }} >
                        <img src={menuphone} alt="menu" />
                    </div>
                    <div className={styles.h3ss}>
                        <h3>MERN Stack Developer</h3>

                    </div>

                    <div>
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
                    <div className={styles.button1}>
                        <a href="https://www.linkedin.com/in/sudais-ameen-283249337?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><button>Hire Me</button></a>
                    </div>
                </div>
                <div className={styles.horizontal}>

                    <div className={styles.sidemobile}>
                        {isOpen && (
                            <div
                                className={styles.overlay}
                                onClick={() => setIsOpen(false)}
                            />
                        )}

                        <div
                            className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""
                                }`}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                ×
                            </button>



                            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                        </div>
                    </div>

                    <hr />
                </div>

                {/* Done responsive navbar */}

                <div className={styles.parenthome}>
                    <div className={styles.leftflex}>
                        <div className={styles.h1ss}>
                            <h1>Hi,I'm</h1>
                        </div>
                        <div className={styles.h2ss}>
                            <h2>Sudais Ameen</h2>
                        </div>
                        <div>
                            <p>I build scalable applications using Reactjs,</p>
                            <p>Nodejs,Express and MongoDB.I love</p>
                            <p>clean code and fast UIs</p>
                        </div>
                        <div className={styles.responsivebutton}>
                            <a href="#projects"><button className={styles.button2}>View Projects</button></a>
                            <a href="https://wa.me/923296970207?text=Hi%2C%20I%20would%20like%20to%20collaborate%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                            ><button className={styles.button3}>Let's Collaborate <span><img src={arrow} alt="arrow" /></span></button></a>
                        </div>
                    </div>
                    <div className={styles.rightflex}>
                        <img src={profile} alt="sudais_img" />

                    </div>
                </div>


                <div className={styles.parenticons} >
                    <div className={styles.icon1}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={html} alt="hmtl" /></a>

                    </div>
                    <div className={styles.icon2}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={css} alt="CSS" /></a>

                    </div>
                    <div className={styles.icon3}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={javascript} alt="JS" /></a>

                    </div>
                    <div className={styles.icon4}>
                        <a href="https://github.com/sudaisameen"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={github} alt="github" /></a>

                    </div>
                    <div className={styles.icon5}>
                        <a href="https://nodejs.org/en"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={nodejs} alt="Nodejs" /></a>

                    </div>
                    <div className={styles.icon6}>
                        <a href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><img src={reactjs} alt="react" /></a>

                    </div>
                </div>



            </div>


        </>
    )




}


export default Home
import styles from "./About.module.css";
import profile from "../assets/profile.png";
import { useRef } from "react";
import download from "../assets/download.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                    start: "top 50%",
                end: "top 14%",
                 scrub:1,

            }
        });

        tl.from(`.${styles.leftflex} img `,{
           x:-100,
        opacity:0,
        duration:0.8,
        ease: "power2.out",

        },"anime");

        tl.from(`.${styles.rightH1} , .${styles.stylepara}, .${styles.stylepara1}, .${styles.button1} button `,{
             x:100,
        opacity:0,
        duration:0.5,
        stagger:0.2,

        },"anime")


    }, {
        scope: container
    });

    return (

        <>
            <div ref={container} className={styles.parentdiv}>
                <div className={styles.parentflex}>
                    <div className={styles.leftflex}>
                        <img src={profile} alt="sudais_img" />

                    </div>

                    <div className={styles.rightflex}>
                        <div className={styles.rightH1}>
                            <h1>About Me</h1>
                        </div>
                        <div className={styles.stylepara}>
                            <p>I am a MERN Stack Web Developer focusing on building</p>
                            <p>production-ready applications, enjoy designing APIs, </p>
                            <p>creating interactive user interfaces, and optimizing </p>
                            <p>performance to deliver smooth and efficient user experiences.</p>
                        </div>
                        <div className={styles.stylepara1}>
                            <p>Along with strong problem-solving skills, I follow clean</p>
                            <p>architecture principles and modern development patterns.</p>
                            <p>I’m passionate about writing maintainable code, improving</p>
                            <p>improving UI/UX flows, and building applications that feel</p>
                            <p>fast, secure, and intuitive. I actively explore new tools in</p>
                            <p>the MERN ecosystem to stay updated and keep</p>
                            <p>improving my development workflow.</p>
                            <p></p>
                        </div>
                        <div className={styles.button1}>
                            <a href="/Sudais_Ameen_Resume.pdf" download ><button>Download Resume <span><img src={download} alt="downloadpic" /></span></button> </a>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )





}

export default About
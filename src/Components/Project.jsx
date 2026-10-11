import styles from "./Project.module.css";
import jsproject from "../assets/jsproject.png";
import tailwindproject from "../assets/tailwindproject.png"
import jsproject2 from "../assets/jsproject2.png";
import arrow from "../assets/arrow.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {

    const container = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                end: "top 14%",
                scrub: 2,
                toggleActions: "play none none reverse",

            }
        });

        tl.from(`.${styles.H1sss} h1, .${styles.parastyle} p `, {

            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.3

        })

        tl.from(`.${styles.border1}`,{

            x:-100,
             opacity: 0,
            duration: 0.8,
        },"anime")
        tl.from(`.${styles.border2}`,{

            x:100,
             opacity: 0,
            duration: 0.8,
        },"anime")






    }, {
        scope: container
    })

    return (

        <>
            <div ref={container} className={styles.parentdiv}>

                <div className={styles.parentflex}>
                    <div className={styles.H1sss}>
                        <h1>Recent Projects</h1>

                    </div>
                    <div className={styles.parastyle}>
                        <p>Here are some of my projects I've build using</p>
                    </div>
                    <div className={styles.parastyle} >
                        <p>TailwindCSS & JS</p>

                    </div>

                </div>


                <div className={styles.boxparent}>
                    <div className={styles.border1}>
                        <div className={styles.jsproj1}>
                            <div>
                                <img src={jsproject2} alt="jsproject" />
                            </div>
                        </div>
                        <div className={styles.project1content}>
                            <div className={styles.h1pro}>
                                <h1>Expense Tracker</h1>
                            </div>
                            <div className={styles.paragraph}>
                                <p>A fully functional expense tracker website with CRUD</p>
                                <p>operations,and a clean,responsive UI</p>
                            </div>
                            <div className={styles.button123}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><button>HTML</button></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > <button>CSS</button></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><button>JS</button></a>
                            </div>
                            <div className={styles.buttonlive}>
                                <a href="https://expense-tracker-azure-ten-65.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >  <button>Live Demo <span><img src={arrow} alt="arrow" /></span></button> </a>
                            </div>
                        </div>

                    </div>

                    <div className={styles.border2}>

                        <div className={styles.jsproj1}>
                            <div>
                                <img src={tailwindproject} alt="jsproject" />
                            </div>
                        </div>

                        <div className={styles.project1content}>
                            <div className={styles.h1pro}>
                                <h1>Demo UI Project</h1>
                            </div>
                            <div className={styles.paragraph}>
                                <p>Here is my old DemoUI project using </p>
                                <p>Core TailwindCSS and a clean, UI</p>
                            </div>
                            <div className={styles.button123}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><button>HTML</button></a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > <button>CSS</button></a>
                                <a href="https://tailwindcss.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > <button>TailwindCSS</button></a>
                            </div>
                            <div className={styles.buttonlive}>
                                <a href="https://demo-ui-o.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><button>Live Demo <span><img src={arrow} alt="arrow" /></span></button> </a>
                            </div>
                        </div>



                    </div>
                </div>

            </div>



        </>
    )




}


export default Projects
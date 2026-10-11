import styles from "./Skills&tech.module.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import cssgpt from "../assets/cssgpt.png";
import jsgpt from "../assets/jsgpt.png";
import reactgpt from "../assets/reactgpt.png";
import node from "../assets/node.png";
import htmlss from "../assets/htmlss.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);


const Skillstech = () => {

    const container = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                end: "top 14%",
                scrub: 1.5,
                toggleActions: "play none none reverse",

            }
        });

        tl.from(`.${styles.H1sss} h1, .${styles.parastyle} p `, {

            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.3

        })
        tl.from(`.${styles.box1}, .${styles.icon1}, .${styles.h3ss}, .${styles.paragraph} `, {

            x: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anime")
        tl.from(`.${styles.box4}, .${styles.icon4}, .${styles.h3icon4}, .${styles.paragraph3} `, {

            x: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anime")

        tl.from(`.${styles.box3}, .${styles.icon3}, .${styles.h3icon3}, .${styles.paragraph2} `, {

            x: 150,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anime")
        tl.from(`.${styles.box6}, .${styles.icon6}, .${styles.h3icon6}, .${styles.paragraph5} `, {

            x: 150,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anime")
        tl.from(`.${styles.box2}, .${styles.icon2}, .${styles.h3icon2}, .${styles.paragraph1} `, {

            y: 20,
            opacity: 0,
            duration: 1,
            scale: 0.3,

        }, "anime")
        tl.from(`.${styles.box5}, .${styles.icon5}, .${styles.h3icon5}, .${styles.paragraph4} `, {

            y: 20,
            opacity: 0,
            duration: 1,
            scale: 0.3,

        }, "anime")




    },
        {
            scope: container
        }
    )

    return (

        <>
            <div ref={container} className={styles.parentdiv}>

                <div className={styles.parentflex}>
                    <div className={styles.H1sss}>
                        <h1>Skills & Technologies</h1>

                    </div>
                    <div className={styles.parastyle}>
                        <p>I worked with modern tools and technologies to build,</p>
                    </div>
                    <div className={styles.parastyle} >
                        <p>scalable and efficient web applications</p>

                    </div>

                </div>

                <div className={styles.boxparent}>

                    <div className={styles.box1}>
                        <div className={styles.icon1}>
                            <img src={cssgpt} alt="icon1" />
                        </div>
                        <div className={styles.h3ss}>
                            <h3>Tailwind CSS</h3>
                        </div>

                        <div className={styles.paragraph}>
                            <p>Creating responsive, modern, and</p>
                            <p>clean layouts quickly using utility-</p>
                            <p>first styling.</p>

                        </div>

                    </div>

                    <div className={styles.box2} >
                        <div className={styles.icon2}>
                            <img src={jsgpt} alt="icon2" />
                        </div>
                        <div className={styles.h3icon2}>
                            <h3>JavaScript</h3>
                        </div>

                        <div className={styles.paragraph1}>
                            <p>Writing efficient, modern, and</p>
                            <p>optimized code for both frontend</p>
                            <p>and backend logic.</p>
                        </div>

                    </div>

                    <div className={styles.box3}>
                        <div className={styles.icon3}>
                            <img src={reactgpt} alt="icon3" />
                        </div>
                        <div className={styles.h3icon3}>
                            <h3>React.js</h3>
                        </div>
                        <div className={styles.paragraph2}>
                            <p>Building fast, interactive, and</p>
                            <p>component-based UIs with clean</p>
                            <p>state management.</p>
                        </div>

                    </div>
                    <div className={styles.box4}>
                        <div className={styles.icon4}>
                            <img src={node} alt="icon3" />
                        </div>
                        <div className={styles.h3icon4}>
                            <h3>Node.js</h3>
                        </div>
                        <div className={styles.paragraph3}>
                            <p>Developing scalable backend</p>
                            <p>logic and high-performance</p>
                            <p>server-side applications.</p>
                        </div>

                    </div>
                    <div className={styles.box5}>

                        <div className={styles.icon5}>
                            <img src={icon4} alt="icon3" />
                        </div>
                        <div className={styles.h3icon5}>
                            <h3>MongoDB</h3>
                        </div>
                        <div className={styles.paragraph4}>
                            <p>Managing NoSQL databases with</p>
                            <p>flexible schemas for high-</p>
                            <p>performance data storage.</p>
                        </div>

                    </div>
                    <div className={styles.box6}>
                        <div className={styles.icon6}>
                            <img src={htmlss} alt="icon3" />
                        </div>
                        <div className={styles.h3icon6}>
                            <h3>HTML</h3>
                        </div>
                        <div className={styles.paragraph5}>
                            <p>Creating clean, well-structured</p>
                            <p>page layouts with semantic</p>
                            <p>markup for better accessibility</p>
                            <p>and SEO</p>
                        </div>

                    </div>



                </div>

            </div>

        </>
    )


}


export default Skillstech
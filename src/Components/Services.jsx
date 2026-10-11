import styles from "./Services.module.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Services = () => {
    const container = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                end: "top 14%",
                scrub: 1.5,

            }
        });

        tl.from(`.${styles.H1sss} h1, .${styles.parastyle} p `, {

            x: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.3

        })

        tl.from(`.${styles.box2}, .${styles.icon2}, .${styles.h3icon2}, .${styles.paragraph1} `, {
            x: -200,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim1")

        tl.from(`.${styles.box1}, .${styles.icon1}, .${styles.h3ss}, .${styles.paragraph} `, {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim1")

        tl.from(`.${styles.box6}, .${styles.icon6}, .${styles.h3icon6}, .${styles.paragraph5} `, {
            x: -200,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim2")



        tl.from(`.${styles.box5}, .${styles.icon5}, .${styles.h3icon5}, .${styles.paragraph4} `, {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim2")

        tl.from(`.${styles.box3}, .${styles.icon3}, .${styles.h3icon3}, .${styles.paragraph2} `, {
            x: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim1")


        tl.from(`.${styles.box4}, .${styles.icon4}, .${styles.h3icon4}, .${styles.paragraph3} `, {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim1")
        tl.from(`.${styles.box7}, .${styles.icon7}, .${styles.h3icon7}, .${styles.paragraph6} `, {
            x: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        }, "anim2")
        tl.from(`.${styles.box8}, .${styles.icon8}, .${styles.h3icon8}, .${styles.paragraph7}`, {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        }, "anim2");





    }, {
        scope: container
    })


    return (
        <>
            <div ref={container} className={styles.parentdiv}>
                <div className={styles.parentflex}>
                    <div className={styles.H1sss}>
                        <h1>My Services</h1>

                    </div>
                    <div className={styles.parastyle}>
                        <p>I offer design and development services focused on building</p>
                    </div>
                    <div className={styles.parastyle} >
                        <p>fast, modern, and user-friendly digital experiences.</p>

                    </div>

                </div>

                <div className={styles.boxparent}>
                    <div className={styles.box1}>
                        <div className={styles.icon1}>
                            <img src={icon1} alt="icon1" />
                        </div>
                        <div className={styles.h3ss}>
                            <h3>Full-Stack Web</h3>

                        </div>
                        <div className={styles.h3ss} >
                            <h3>Development</h3>
                        </div>
                        <div className={styles.paragraph}>
                            <p>End-to-end web applications</p>
                            <p>using React, Node.js, Express,</p>
                            <p>and MongoDB with clean</p>
                            <p>architecture and scalable code.</p>

                        </div>

                    </div>
                    <div className={styles.box2} >
                        <div className={styles.icon2}>
                            <img src={icon2} alt="icon2" />
                        </div>
                        <div className={styles.h3icon2}>
                            <h3>Frontend</h3>
                        </div>
                        <div className={styles.h3icon2}>
                            <h3>Development</h3>
                        </div>
                        <div className={styles.paragraph1}>
                            <p>Fast, responsive, and user-friendly</p>
                            <p>interfaces built with React and</p>
                            <p>modern UI frameworks like</p>
                            <p>Tailwind CSS.</p>
                        </div>

                    </div>
                    <div className={styles.box3}>
                        <div className={styles.icon3}>
                            <img src={icon3} alt="icon3" />
                        </div>
                        <div className={styles.h3icon3}>
                            <h3>Backend & API</h3>
                        </div>
                        <div className={styles.h3icon3}>
                            <h3>Development</h3>
                        </div>
                        <div className={styles.paragraph2}>
                            <p>Secure and efficient REST APIs</p>
                            <p>using Node.js and Express,</p>
                            <p>optimized for performance and</p>
                            <p>scalability.</p>
                        </div>

                    </div>
                    <div className={styles.box4}>
                        <div className={styles.icon4}>
                            <img src={icon4} alt="icon3" />
                        </div>
                        <div className={styles.h3icon4}>
                            <h3>Database Design</h3>
                        </div>
                        <div className={styles.h3icon4}>
                            <h3>& Management</h3>
                        </div>
                        <div className={styles.paragraph3}>
                            <p>Well-structured MongoDB</p>
                            <p>databases with optimized queries</p>
                            <p>for speed, reliability, and data</p>
                            <p>integrity.</p>
                        </div>

                    </div>
                    <div className={styles.box5}>

                        <div className={styles.icon5}>
                            <img src={icon5} alt="icon3" />
                        </div>
                        <div className={styles.h3icon5}>
                            <h3>Authentication &</h3>
                        </div>
                        <div className={styles.h3icon5}>
                            <h3>Authorization</h3>
                        </div>
                        <div className={styles.paragraph4}>
                            <p>Implementation of secure login</p>
                            <p>systems using JWT, role-based</p>
                            <p>access control, and best security</p>
                            <p>practices.</p>
                        </div>

                    </div>
                    <div className={styles.box6}>
                        <div className={styles.icon6}>
                            <img src={icon6} alt="icon3" />
                        </div>
                        <div className={styles.h3icon6}>
                            <h3>E-Commerce</h3>
                        </div>
                        <div className={styles.h3icon6}>
                            <h3>Development</h3>
                        </div>
                        <div className={styles.paragraph5}>
                            <p>Product listings, cart systems,</p>
                            <p>checkout flows, and payment</p>
                            <p>gateway integrations for demo or</p>
                            <p>real projects.</p>
                        </div>

                    </div>
                    <div className={styles.box7}>

                        <div className={styles.icon7}>
                            <img src={icon7} alt="icon3" />
                        </div>
                        <div className={styles.h3icon7}>
                            <h3>Performance</h3>
                        </div>
                        <div className={styles.h3icon7}>
                            <h3>Optimization</h3>
                        </div>
                        <div className={styles.paragraph6}>
                            <p>Improving load times, API</p>
                            <p>response speed, and overall</p>
                            <p>application performance for</p>
                            <p>better user experience.</p>
                        </div>

                    </div>
                    <div className={styles.box8}>

                        <div className={styles.icon8}>
                            <img src={icon8} alt="icon3" />
                        </div>
                        <div className={styles.h3icon8}>
                            <h3>Deployment &</h3>
                        </div>
                        <div className={styles.h3icon8}>
                            <h3>Hosting Support</h3>
                        </div>
                        <div className={styles.paragraph7}>
                            <p>Deploying applications on cloud</p>
                            <p>platforms with proper</p>
                            <p>environment setup and</p>
                            <p>production-ready configuration.</p>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )


}


export default Services
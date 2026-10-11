
import styles from "./Contact.module.css";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import map from "../assets/map.png";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {

    const container = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                end: "top 14%",
                scrub: 2,

            }
        });

        tl.from(`.${styles.H1sss} h1, .${styles.parastyle} p `, {

            x: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3

        })

        tl.from(`.${styles.leftcontact}, .${styles.gsaph1}, .${styles.parasss}, .${styles.imgandpara}, img`, {

            x: -100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.3


        }, "anime")
         tl.from(`.${styles.rightcontact}`, {

            x: 0,
            opacity: 0,
            duration: 0.9,


        }, "anime")

        tl.from(`.${styles.inputcontrol}, .${styles.stylebutton} , label, input, textarea`, {

            x: 100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.3


        }, "anime")


    },
        {
            scope: container
        })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""


    })


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
New Portfolio Message

   Name: ${formData.name}
   Email: ${formData.email}
   Phone: ${formData.phone}
   Subject: ${formData.subject}
   Message :${formData.message}
 
   `;

        const whatsappUrl =
            `https://wa.me/923296970207?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

        console.log(formData);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });


    };



    return (
        <>
            <div ref={container} className={styles.parentdiv}>

                <div className={styles.parentflex}>
                    <div className={styles.H1sss}>
                        <h1>Contact Us</h1>

                    </div>
                    <div className={styles.parastyle}>
                        <p>Have a project in mind? Let's connect and discuss how I</p>
                    </div>
                    <div className={styles.parastyle} >
                        <p>can help bring your ideas to life</p>

                    </div>

                </div>

                <div className={styles.parentcontact}>
                    <div className={styles.leftcontact}>
                        <div className={styles.H1content}>
                            <h1 className={styles.gsaph1}>Get in touch today</h1>
                        </div>
                        <div className={styles.parasss}>
                            <p>I’m always open to discussing new projects,</p>
                            <p>creative ideas, or opportunities to be part of</p>
                            <p>your vision.</p>
                        </div>

                        <div className={styles.personalinfo}>

                            <div className={styles.imgandpara}>
                                <img src={mail} alt="email" />
                                <p>sudaisameen72@gmail.com</p>
                            </div>
                            <div className={styles.imgandpara}>
                                <img src={phone} alt="email" />
                                <p>+92 3296970207</p>
                            </div>
                            <div className={styles.imgandpara}>
                                <img src={map} alt="email" />
                                <p>Gujranwala,Punjab,Pakistan</p>

                            </div>
                        </div>
                    </div>





                    <div className={styles.rightcontact}>

                        <form onSubmit={handleSubmit} >
                            <div className={styles.inputcontrol}>
                                <div>
                                    <div> <label>Name</label> </div>
                                    <input type="text" onChange={handleChange} value={formData.name} name="name" placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <div> <label>Email</label> </div>
                                    <input type="email" onChange={handleChange} value={formData.email} name="email" placeholder="Enter your email" required />
                                </div>
                                <div>
                                    <div> <label>Phone</label> </div>
                                    <input type="tel" onChange={handleChange} value={formData.phone} name="phone" placeholder="Enter your number" required />
                                </div>
                                <div>
                                    <div> <label>Company</label> </div>
                                    <input type="text" onChange={handleChange} value={formData.subject} name="subject" placeholder="Enter your Company" />
                                </div>
                                <div className={styles.message}>
                                    <div> <label>Message</label> </div>
                                    <textarea onChange={handleChange} value={formData.message} name="message" placeholder="Please type your message here......"></textarea>
                                </div>
                                <div className={styles.stylebutton}>
                                    <button type="submit" >Send Message</button>
                                </div>


                            </div>
                        </form>





                    </div>
                </div>





            </div>


        </>
    )


}


export default Contact
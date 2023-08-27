import React from 'react'
import './AboutMe.scss'
import frontendImg from "../../img/Aboutme-1.png";
import backendImg from "../../img/Aboutme-2.png";
import skillImg from "../../img/Aboutme-3.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { motion } from 'framer-motion'
const AboutMe = () => {
    const transition = { duration: 10, type: "spring" }
    return (
        <div className="AboutMe">
            <div className="awesome">
                <span>About Me</span>
                <span></span>
                <span>Self-taught developer passionate about solving problems with top-notch web technologies. Specialized in web development, constantly learning and staying updated with the latest advancements. Creative problem solver, dedicated to delivering exceptional results.
                    <br />
                    
                </span>
                <a href={Resume} download>

                    <button className="button s-button">
                        Dowload CV
                    </button>
                </a>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">

                <motion.div style={{ left: "36%" }}

                    initial={{ left: "20rem" }}
                    whileInView={{ left: "65%" }}
                    transition={{ transition }}
                >
                    <Card
                        emoji={backendImg}
                        heading={"Backend"}
                        details={"NodeJS, ExpressJS, MongoDB"}
                    />
                </motion.div>

                <motion.div style={{ left: "-4rem", top: "13rem" }}
                    initial={{ left: "-14rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={{ transition }}

                >
                    <Card
                        emoji={frontendImg}
                        heading={"Frontend"}
                        details={"HTML, CSS, Javascript, React"}
                    />
                </motion.div>
                <motion.div style={{ left: "12rem", top: "22rem" }}

                    initial={{ left: "22rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={{ transition }}
                >
                    <Card
                        emoji={skillImg}
                        heading={"Skills"}
                        details={
                            "Redux, Firebase, SASS, Figma, Git, AWS"
                        }
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>


            </div>
        </div>
    )
}

export default AboutMe
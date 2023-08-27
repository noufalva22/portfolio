import React from 'react'
import './Intro.scss'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from "../../img/Vector1.png";
import reactImg from "../../img/React.svg";
import JavascriptImg from "../../img/Javascript.svg";
import NodejsImg from "../../img/Nodejs.svg";
import MongoDBImg from "../../img/MongoDB.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
const Intro = () => {
    const transition = { duration: 10, type: "spring" }

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I'm</span>
                    <span>Naufal Kareem</span>

                    <span>Sefl Learned MERN Stack Developer</span>
                </div>
                <button className='button i-button'> Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/noufalva22" target="_blank">
                        <img src={Github} alt="Github" />
                    </a>

                    <a href='https://www.linkedin.com/in/noufalva/' target='_blank'>
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    {/* <a>
                        <img src={Instagram} alt="Instagram" />
                    </a> */}
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                {/* <img src={Vector2} alt="" /> */}
                {/* <img src={boy} alt="" /> */}
                    {/* JS LOGO */}
                <motion.div style={{ top: '-4%', left: '68%' }}

                    initial={{ left: "78%" }}
                    whileInView={{ left: "68%" }}
                    transition={{ transition }}
                >

                    <FloatingDiv image={reactImg} txt1='Full Stack' txt2='Developer' />
                </motion.div>


                <motion.div style={{ top: '4%', left: '8%' }}
                    initial={{ left: "-8%" }}
                    whileInView={{ left: "8%" }}
                    transition={{ transition }}
                >
                    <FloatingDiv image={MongoDBImg} txt1='Self' txt2='taught' />
                </motion.div>
                {/* MONGO DB LOGO */}
                <motion.div style={{ top: '64%', left: '68%' }}

                    initial={{ left: "98%" }}
                    whileInView={{ left: "68%" }}
                    transition={{ transition }}
                >

                    <FloatingDiv image={JavascriptImg} txt1='Full Stack' txt2='Developer' />
                </motion.div>
                {/* EXPRESS LOGO */}


                <motion.div style={{ top: '64%', left: '8%' }}
                    initial={{ left: "-8%" }}
                    whileInView={{ left: "8%" }}
                    transition={{ transition }}
                >
                    <FloatingDiv image={NodejsImg} txt1='Self' txt2='taught' />
                </motion.div>


                <div className='blur ' style={{ backgroundColor: "rgb(238 210 255)" }}> </div>
                <div className='blur ' style={{
                    backgroundColor: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}> </div>


            </div>

        </div>
    )
}

export default Intro
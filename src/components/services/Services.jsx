import React, { useRef } from 'react';
import './services.scss';

import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -50,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    }
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className='services'
            variants={variants}
            initial="initial"
            whileInView="animate"
            animate={isInView && "animate"}
            ref={ref}
        >
            <motion.div className="textContainer">
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/images/people.webp" alt="people" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Nesciunt dolorem repellat aliquam alias! Odit vero labore
                        repudiandae consequuntur doloremque itaque libero saepe dolorem
                        vitae sint, ullam rem. Sapiente corrupti officia consectetur.
                    </p>
                    <button>GO</button>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Nesciunt dolorem repellat aliquam alias! Odit vero labore
                        repudiandae consequuntur doloremque itaque libero saepe dolorem
                        vitae sint, ullam rem. Sapiente corrupti officia consectetur.
                    </p>
                    <button>GO</button>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Nesciunt dolorem repellat aliquam alias! Odit vero labore
                        repudiandae consequuntur doloremque itaque libero saepe dolorem
                        vitae sint, ullam rem. Sapiente corrupti officia consectetur.
                    </p>
                    <button>GO</button>
                </motion.div>

                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Nesciunt dolorem repellat aliquam alias! Odit vero labore
                        repudiandae consequuntur doloremque itaque libero saepe dolorem
                        vitae sint, ullam rem. Sapiente corrupti officia consectetur.
                    </p>
                    <button>GO</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Services;

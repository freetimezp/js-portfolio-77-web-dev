import React from 'react';
import './hero.scss';

import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.15
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            duration: 25,
        }
    }
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Helena Taylor</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer & UI/UX Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>

                    <motion.img
                        src="/images/scroll.png"
                        alt="scroll"
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </div>

            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Write best UI/UX content for your web application
            </motion.div>

            <div className="imageContainer">
                <img src="/images/hero.png" alt="hero" />
            </div>
        </div>
    );
}

export default Hero;

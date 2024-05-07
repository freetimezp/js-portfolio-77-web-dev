import React, { useRef } from 'react';
import './portfolio.scss';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import portfolioImg1 from '/images/item-1.jpg';
import portfolioImg2 from '/images/item-2.jpg';
import portfolioImg3 from '/images/item-3.jpg';
import portfolioImg4 from '/images/item-4.jpg';

const items = [
    {
        id: 1,
        title: "React App",
        img: portfolioImg1,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde 
        consectetur labore ratione, quam nihil iure omnis voluptates architecto! 
        Incidunt aperiam cum odio itaque aliquid officiis, adipisci sequi 
        distinctio laboriosam.`
    },
    {
        id: 2,
        title: "Next JS Project",
        img: portfolioImg2,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde 
        consectetur labore ratione, quam nihil iure omnis voluptates architecto! 
        Incidunt aperiam cum odio itaque aliquid officiis, adipisci sequi 
        distinctio laboriosam.`
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: portfolioImg3,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde 
        consectetur labore ratione, quam nihil iure omnis voluptates architecto! 
        Incidunt aperiam cum odio itaque aliquid officiis, adipisci sequi 
        distinctio laboriosam.`
    },
    {
        id: 4,
        title: "PHP App",
        img: portfolioImg4,
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde 
        consectetur labore ratione, quam nihil iure omnis voluptates architecto! 
        Incidunt aperiam cum odio itaque aliquid officiis, adipisci sequi 
        distinctio laboriosam.`
    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="portfolio" />
                    </div>

                    <motion.div className="textContainer" style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX: scaleX }}></motion.div>
            </div>
            {
                items.map((item) => (
                    <Single key={item.id} item={item} />
                ))
            }
        </div >
    );
}

export default Portfolio;

import React from 'react';
import { motion } from 'framer-motion';

const items = [
    "home",
    "services",
    "portfolio",
    "about",
    "contact"
];

const variants = {
    open: {
        transition: {
            staggerChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};

const Links = () => {
    return (
        <motion.div className='links' variants={variants}>
            {items.map((item, i) => (
                <motion.a
                    href={`#${item}`}
                    variants={itemVariants}
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
}

export default Links;

import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox='0 0 23 23'>
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap='round'
                    d="M2 2.5 L20 2.5"
                    initial={{ transform: "rotate(0deg) translate(0px, 0px)" }}
                    variants={{
                        closed: { transform: "rotate(0deg) translate(0px, 0px)" },
                        open: { transform: "rotate(45deg) translate(6px, 6px)" }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap='round'
                    d="M2 9.423 L20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap='round'
                    d="M2 16.346 L20 16.346"
                    initial={{ transform: "rotate(0deg) translate(0px, 0px)" }}
                    variants={{
                        closed: { transform: "rotate(0deg) translate(0px, 0px)" },
                        open: { transform: "rotate(-45deg) translate(4px,-4px)" }
                    }}
                />
            </svg>
        </button>
    );
}

export default ToggleButton;

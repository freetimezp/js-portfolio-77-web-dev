import React from 'react';
import './navbar.scss';

import { motion } from 'framer-motion';

import instagramImg from '/images/instagram.png';
import facebookImg from '/images/facebook.png';
import youtubeImg from '/images/youtube.png';
import dribbleImg from '/images/dribbble.png';

import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />

            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Logo</motion.span>

                <div className="social">
                    <a href="#"><img src={instagramImg} alt="social" /></a>
                    <a href="#"><img src={facebookImg} alt="social" /></a>
                    <a href="#"><img src={youtubeImg} alt="social" /></a>
                    <a href="#"><img src={dribbleImg} alt="social" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

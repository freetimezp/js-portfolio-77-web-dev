import React from 'react';
import './navbar.scss';

import instagramImg from '../../../public/images/instagram.png';
import facebookImg from '../../../public/images/facebook.png';
import youtubeImg from '../../../public/images/youtube.png';
import dribbleImg from '../../../public/images/dribbble.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <span>Logo</span>

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

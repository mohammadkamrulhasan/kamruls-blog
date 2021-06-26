import React from 'react';
import './Header.css';
import HeadImg from '../../image/bali-puraayu.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Kamruls</span>
                <span className="headerTitleBg">Blog</span>
            </div>
            <img src={HeadImg} alt="" className="headerImg"/>
        </div>
    );
};

export default Header;
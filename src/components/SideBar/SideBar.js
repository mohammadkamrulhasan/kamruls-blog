import React from 'react';
import './SideBar.css';
import sideImg from '../../image/kamrul.png';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={sideImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis perferendis ab commodi! Dolorum accusantium s</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="siderbarList">
                    <li className="siderbarListItem">Life</li>
                    <li className="siderbarListItem">Nature</li>
                    <li className="siderbarListItem">Technology</li>
                    <li className="siderbarListItem">History</li>
                    <li className="siderbarListItem">Culture</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-p"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
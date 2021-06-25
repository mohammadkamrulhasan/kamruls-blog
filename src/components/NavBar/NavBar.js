import React from 'react';
import './NavBar.css';
import NavImg from '../../image/kamrul.png';

const NavBar = () => {
    return (
        <div className="top">
           <div className="topLeft">
           <i className="topIcon fab fa-facebook-square"></i>
           <i className="topIcon fab fa-twitter-square"></i>
           <i className="topIcon fab fa-pinterest-p"></i>
           <i className="topIcon fab fa-instagram"></i>
           </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem">Home</li>
                   <li className="topListItem">About</li>
                   <li className="topListItem">Contact</li>
                   <li className="topListItem">Write</li>
                   <li className="topListItem">logout</li>
                  

               </ul>
           
           </div>
           <div className="topRight"></div>
           <img 
           className="topImg"
           src={NavImg} alt="" 
           />
           <i className="topSearchIcon fas fa-search"></i>
        </div>
    );
};

export default NavBar;
import React from 'react';
import './NavBar.css';
import NavImg from '../../image/kamrul.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

const NavBar = () => {
    const { user, dispatch } = useContext(Context);
    // const PF = "http://localhost:5000/images/"
    const PF = {NavImg};
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };

    // const user = false;
    return (
        // <div className="top">
        //     <div className="topLeft">
        //         <i className="topIcon fab fa-facebook-square"></i>
        //         <i className="topIcon fab fa-twitter-square"></i>
        //         <i className="topIcon fab fa-pinterest-p"></i>
        //         <i className="topIcon fab fa-instagram"></i>
        //     </div>
        //     <div className="topCenter">
        //         <ul className="topList">
        //             <li className="topListItem">
        //                 <Link to="/home" className="link" >Home</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link to="/About" className="link">About</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link to="/Contact" className="link">Contact</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link to="/Write"className="link" >Write</Link>
        //             </li>
        //             <li className="topListItem">
        //                 {user && "Logout"}
        //             </li>


        //         </ul>

        //     </div>
        //     <div className="topRight"></div>
        //     {
        //         user? (
        //             <img
        //         className="topImg"
        //         src={NavImg} alt=""
        //     />
        //         ):(
        //             <ul className="topList">
        //                 <li className="topListItem">
        //                 <Link to="/login" className="link" >Login</Link>
        //                 </li>
                   
        //             <li className="topListItem">
        //             <Link to="/register" className="link" >Register</Link>
        //                 </li>
                    
        //             </ul>
        //         )
        //     }
            
        //     <i className="topSearchIcon fas fa-search"></i>
        // </div>

        <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    );
};

export default NavBar;
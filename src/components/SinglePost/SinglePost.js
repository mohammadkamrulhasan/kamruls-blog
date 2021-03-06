import React from 'react';
import './SinglePost.css';
import SingleImg from '../../image/slow-3.jpg';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const singlePost = () => {
//   const location = useLocation();
//   const path = location.pathname.split("/")[2];
//   const [post, setPost] = useState({});
//   const PF = "http://localhost:5000/images/";
//   const { user } = useContext(Context);
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [updateMode, setUpdateMode] = useState(false);

//   useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("/posts/" + path);
//       setPost(res.data);
//       setTitle(res.data.title);
//       setDesc(res.data.desc);
//     };
//     getPost();
//   }, [path]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${post._id}`, {
//         data: { username: user.username },
//       });
//       window.location.replace("/");
//     } catch (err) {}
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/posts/${post._id}`, {
//         username: user.username,
//         title,
//         desc,
//       });
//       setUpdateMode(false)
//     } catch (err) {}
//   };
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={SingleImg} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Kamrul</b> </span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laudantium? Et iusto vel quia explicabo earum temporibus tempora modi cumque delectus quisquam, dolores ab consectetur in molestiae dolorum maiores placeat quasi animi. Vitae, minus minima beatae eos odit voluptatem dignissimos rem laborum obcaecati. Fuga distinctio dolorem, repudiandae perspiciatis iure ex.</p>
            </div>
        </div>


    //     <div className="singlePost">
    //   <div className="singlePostWrapper">
    //     {post.photo && (
    //       <img src={PF + post.photo} alt="" className="singlePostImg" />
    //     )}
    //     {updateMode ? (
    //       <input
    //         type="text"
    //         value={title}
    //         className="singlePostTitleInput"
    //         autoFocus
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     ) : (
    //       <h1 className="singlePostTitle">
    //         {title}
    //         {post.username === user?.username && (
    //           <div className="singlePostEdit">
    //             <i
    //               className="singlePostIcon far fa-edit"
    //               onClick={() => setUpdateMode(true)}
    //             ></i>
    //             <i
    //               className="singlePostIcon far fa-trash-alt"
    //               onClick={handleDelete}
    //             ></i>
    //           </div>
    //         )}
    //       </h1>
    //     )}
    //     <div className="singlePostInfo">
    //       <span className="singlePostAuthor">
    //         Author:
    //         <Link to={`/?user=${post.username}`} className="link">
    //           <b> {post.username}</b>
    //         </Link>
    //       </span>
    //       <span className="singlePostDate">
    //         {new Date(post.createdAt).toDateString()}
    //       </span>
    //     </div>
    //     {updateMode ? (
    //       <textarea
    //         className="singlePostDescInput"
    //         value={desc}
    //         onChange={(e) => setDesc(e.target.value)}
    //       />
    //     ) : (
    //       <p className="singlePostDesc">{desc}</p>
    //     )}
    //     {updateMode && (
    //       <button className="singlePostButton" onClick={handleUpdate}>
    //         Update
    //       </button>
    //     )}
    //   </div>
    // </div>
    );
};

export default singlePost;
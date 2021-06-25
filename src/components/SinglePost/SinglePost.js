import React from 'react';
import './SinglePost.css';
import SingleImg from '../../image/slow-3.jpg';

const singlePost = () => {
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
    );
};

export default singlePost;
import React from 'react';
import './Post.css';
import postImage from '../../image/village.jpg';

const Post = () => {
    return (
        <div className="post"> 
            <img 
            className="postImg"
            src={postImage} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">life</span>
                    <span className="postCat">Culture</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet, consectetur
                </span>
                <hr />
                <span className="postData">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus exercitationem ea cum architecto eos reiciendis mollitia quisquam rem ut dolorem officiis corrupti soluta blanditiis distinctio, ipsam ratione consequuntur id recusandae non. Eaque ratione placeat sint quae expedita inventore, iste sapiente explicabo, facere cum, sequi harum rerum esse! Optio, impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus exercitationem ea cum architecto eos reiciendis mollitia quisquam rem ut dolorem officiis corrupti soluta blanditiis distinctio, ipsam ratione consequuntur id recusandae non. Eaque ratione placeat sint quae expedita inventore, iste sapiente explicabo, facere cum, sequi harum rerum esse! Optio, impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus exercitationem ea cum architecto eos reiciendis mollitia quisquam rem ut dolorem officiis corrupti soluta blanditiis distinctio, ipsam ratione consequuntur id recusandae non. Eaque ratione placeat sint quae expedita inventore, iste sapiente explicabo, facere cum, sequi harum rerum esse! Optio, impedit.</p>
        </div>
    );
};

export default Post;
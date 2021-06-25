import React from 'react';
import './Write.css';
import WriteImage from '../../image/photo-1523592121529-f6dde35f079e.jpeg';

const Write = () => {
    return (
        <div className="write">
            <img src={WriteImage} alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story ..." type="text" className="writeInput writeText" ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
};

export default Write;
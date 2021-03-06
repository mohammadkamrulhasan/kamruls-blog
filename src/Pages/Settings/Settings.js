import React from 'react';
import './Settings.css';
import SideBar from '../../components/SideBar/SideBar';
import SettingsImage from '../../image/kamrul.png';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


const Settings = () => {
    const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://desolate-dusk-37179.herokuapp.com/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
    return (
        // <div className="settings">
        //   <div className="settingsWrapper">
        //     <div className="settingsTitle">
        //         <span className="settingsUpdateTitle">Update Your Account</span>
        //         <span className="settingsDeleteTitle">Delete Your Account</span>
        //     </div>
        //     <form className="settingsForm">
        //         <label>Profile Picture</label>
        //         <div className="settingsPP">
        //             <img src={SettingsImage} alt="" className="settingsImg"/>
                
        //         <label htmlFor="fileInput">
        //         <i className="settingsPPIcon fas fa-user-circle"></i>                
        //         </label>
        //         </div>
        //         <input type="file" id="fileInput" style={{display:"none"}} />
        //         <label>User Name</label>
        //         <input type="text" placeholder="Kamrul" />
        //         <label>Email</label>
        //         <input type="text" placeholder="test@test.com" />
        //         <label>Password</label>
        //         <input type="password" />
        //         <button className="settingsSubmit">Update</button>
        //     </form>
        //   </div>
        //   <SideBar></SideBar>
        // </div>
        <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
    );
};

export default Settings;
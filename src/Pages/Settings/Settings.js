import React from 'react';
import './Settings.css';
import SideBar from '../../components/SideBar/SideBar';
import SettingsImage from '../../image/kamrul.png';

const Settings = () => {
    return (
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={SettingsImage} alt="" className="settingsImg"/>
                
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fas fa-user-circle"></i>                
                </label>
                </div>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <label>User Name</label>
                <input type="text" placeholder="Kamrul" />
                <label>Email</label>
                <input type="text" placeholder="test@test.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
          </div>
          <SideBar></SideBar>
        </div>
    );
};

export default Settings;
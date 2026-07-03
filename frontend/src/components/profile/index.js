import React from "react";
import img from "../../assets/img/my-profile.jpeg";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div id="profile" className="profile-container">
      <div className="profile-text">
        <p>Hi There, I'm</p>
        <h1>Elshaddai Grace Tambuwun</h1>
        <p>
          An Computer Science graduate with hands-on experience building REST
          APIs as a <span>Backend Developer intern</span>. Currently, I am
          focusing on mastering client-side development to transition into a{" "}
          <span>Junior Frontend Developer</span> and{" "}
          <span>Mobile Application Developer</span>.
        </p>
        <a
          href="http://localhost:5000/download-cv"
          target="_blank"
          rel="noreferrer"
        >
          <button className="CV-button">Download CV</button>
        </a>

        <div className="social-wrapper">
          <p>Let's Connect!</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/elshaddai-tambuwun-355899304"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/elsha.tambuwun?igsh=MTEydmpzN3U1ZzgwNw=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elshatambuwun17@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="profile-img">
        <img src={img} alt="my-profile" />
      </div>
    </div>
  );
};

export default Profile;

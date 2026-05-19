import React from "react";
import img from "../../assets/img/my-profile.jpeg";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <div id="profile" className="profile-container">
      <div className="profile-text">
        <h1>My Profile</h1>
        <p>
          A <span>Computer Science</span> graduate with a major in Informatics,
          I have hands-on experience as a <span>Backend Developer intern</span>.
          During my internship, I worked on building REST APIs and developing
          server-side features using modern web technologies to create efficient
          and scalable systems. I am accustomed to working collaboratively in
          teams, possess strong time management skills, and am capable of
          completing tasks according to targets and deadlines. I also have
          strong communication, problem-solving, discipline, and adaptability
          skills, with a commitment to continuously improving my competencies in
          backend system development.
        </p>
        <a
          href="http://localhost:5000/download-cv"
          target="_blank"
          rel="noreferrer"
        >
          <button className="CV-button">Download CV</button>
        </a>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/elshaddai-tambuwun-355899304"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/elsha.tambuwun?igsh=MTEydmpzN3U1ZzgwNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elshatambuwun17@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="profile-img">
        <img src={img} alt="my-profile" />
      </div>
    </div>
  );
};

export default Profile;

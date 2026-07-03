import React from "react";
import "../../App.css";
import bg from "./../../assets/img/bg1.mp4"

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={bg} type="video/mp4" />
        </video>
      </div>

      <div className="title">
        <h1>Elshaddai Grace Tambuwun</h1>
        <h3>| Frontend Developer | Mobile Application |</h3>
        <a href="#profile">
          <button>About Me</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

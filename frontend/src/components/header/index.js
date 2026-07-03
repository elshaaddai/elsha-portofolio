import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        if (window.scrollY > homeHeight - 100) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={showHeader ? "header show" : "header"}>
      <h1>Hi, I'm Elsha</h1>
      <nav>
        <ol>
          <a href="#home">Home</a>
        </ol>
        <ol>
          <a href="#profile">About</a>
        </ol>
        <ol>
          <a href="#experience">Experience</a>
        </ol>
        <ol>
          <a href="#project">Project</a>
        </ol>
        <ol>
          <a href="#certificate">Certificate</a>
        </ol>
        <ol>
          <a href="#contact">Contact</a>
        </ol>
      </nav>
    </header>
  );
};

export default Header;

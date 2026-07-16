import React, { useEffect, useRef } from "react";
import skripsi from "../../assets/img/skripsi.png"
import rekrutmen from "../../assets/img/sistemRSA.png"
import finote from "../../assets/img/finote.png"


const Project = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 10) {
          setTimeout(() => {
            card.classList.add("visible");
          }, i * 100);
        }
      });
    };
  
    // Jalankan sekali saat mount
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      img: skripsi,
      title: "Penelitian Sistem Pengajuan Cuti & Monitoring Masa Berlaku SIP Menggunakan LLM",
      category: "Projek Penelitian",
      github: ""
    },
    {
      img: rekrutmen,
      title: "Sistem Rekrutmen & E-Filing Berbasis Website",
      category: "HR System",
      github: ""
    },
    {
      img: finote,
      title: "Finote",
      category: "Finance Note",
      github: "https://github.com/FaithzaMandolang/Finote.git"
    },
  ]
  return (
    <div id="project" className="project-container">
      <h1>Project</h1>
      <div className="project-list">
        {projects.map((projects, i) => (
          <div className= "project-card fade-up" 
          key={i}
          ref={(el) => (cardRefs.current[i] = el)}
          style={{ transitionDelay: `${i * 0.15}s`}}
          >
            <div className="img-wrapper">
              <img src={projects.img} alt={projects.title} className="project-img" />
            </div>
            <div className="project-info">
              <h3>{projects.title}</h3>
              <p>{projects.category}</p>
              <a href={projects.github} target="_blank" rel="no-referrer noreferrer" className="github-link">View 
                <span className="arrow-circle">→</span>
              </a>
            </div> 
          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;

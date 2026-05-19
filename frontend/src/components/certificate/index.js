import React from "react";
import Magang from "../../assets/certificate/magang.jpeg";
import ACP from "../../assets/certificate/ACP.png";
import Dicoding from "../../assets/certificate/dicoding.png";
import Revou from "../../assets/certificate/revou.png";

const Certificate = () => {
  return (
    <div id="certificate" className="certi-container">
      <h1>Certificate</h1>

      <div className="certi-card">
        <img src={Magang} alt="Sertifikat Magang RSA" />
        <div className="certi-text">
          <h3>Internship Certificate</h3>
          <p>
            Completed internship program as Backend Developer and contributed to
            REST API development and system integration.
          </p>
        </div>
      </div>

      <div className="certi-card">
        <img src={ACP} alt="Sertifikasi Adobe Photoshop" />
        <div className="certi-text">
          <h3>Adobe Certified Professional</h3>
          <p>
            Certification in visual design and image editing using Adobe
            Photoshop.
          </p>
        </div>
      </div>

      <div className="certi-card">
        <img src={Dicoding} alt="Sertifikat Course Dicoding" />
        <div className="certi-text">
          <h3>Dicoding Certificate</h3>
          <p>
            Completed online learning program focused on modern web development.
          </p>
        </div>
      </div>

      <div className="certi-card">
        <img src={Revou} alt="Sertifikat Course Revou" />
        <div className="certi-text">
          <h3>Revo U Certificate</h3>
          <p>
            Participated in intensive learning related to technology and digital
            skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;

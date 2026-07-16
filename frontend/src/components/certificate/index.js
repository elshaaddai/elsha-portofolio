import React from "react";
import Magang from "../../assets/certificate/magang.jpeg";
import ACP from "../../assets/certificate/ACP.png";
import Dicoding from "../../assets/certificate/dicoding.png";
import Revou from "../../assets/certificate/revou.png";


const Certificate = () => {
  const certificates = [
    {
      img: Magang,
      title: "Internship Certificate",
      issuer: "Rumah Sakit Advent Manado"
    },
    {
      img: ACP,
      title: "Adobe Certified Professional",
      issuer: "Adobe Photosop"
    },
    {
      img: Dicoding,
      title: "Basic Web Programming",
      issuer: "Dicoding Indonesia"
    },
    {
      img: Revou,
      title: "Intro To Software Engineer",
      issuer: "RevoU"
    }
  ]
  return (
    <div id="certificate" className="certi-container">
      <h1>Certificate</h1>

      <div className="certi-list">
        {certificates.map((certi, i) => (
          <div className="certi-card" key={i}>
            <img src={certi.img} alt={certi.title} className="certi-img" />
            <div className="certi-text">
              <h3>{certi.title}</h3>
              <p>{certi.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

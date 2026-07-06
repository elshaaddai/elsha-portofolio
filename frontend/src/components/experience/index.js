import React from "react";
import unklab from "../../assets/img/unklab.png"
import backend from  "../../assets/img/be.png"
import vocs from "../../assets/img/vocs.png"

const Experience = () => {
  const stats = [
    {number: "3", label: "roles"},
    {number: "1+", label: "years"},
    {number: "10+", label: "skills"}
  ]

  const experience = [
    {
      icon: unklab,
      title: "Teacher Assistant",
      org: "Universitas Klabat",
      date: "Jan 2026 - May 2026",
      desc: "Bertanggung jawab membantu dosen dalam melaksanakan ujian serta menilai tugas mahasiswa dengan ketelitian tinggi.",
      skills: ["Time Management", "Communication", "Spreadsheet", "LMS", "Public Speaking"]
    },
    {
      icon: backend,
      title: "Backend Developer Intern",
      org: "Rumah Sakit Advent Manado",
      date: "Jul 2025 - Dec 2025",
      desc: "Membangun sistem manajemen rekrutmen dan kepegawaian dengan RESTful API, impor CSV, notifikasi email otomatis, dan integrasi frontend React.js.",
      skills: ["Problem Solving", "Teamwork", "Collaboration", "Time Management", "Critical Thinking", "Communication", "Git", "GitHub", "JavaScript", "Express.js", "MongoDB", "React.js"]
    },
    {
      icon: vocs,
      title: "Secretary",
      org: "Voice Of Computer Science (Faculty Choir)",
      date: "Jan 2025 - Aug 2025",
      desc: "Mengelola administrasi dan komunikasi internal organisasi paduan suara, mencakup pembuatan surat izin, pencatatan kehadiran anggota, dan koordinasi jadwal latihan untuk memastikan kelancaran kegiatan semester.",
      skills: ["Administration","Problem Solving", "Teamwork", "Time Management", "Communication", "Spreadsheet"]
    }
  ]
  return (
    <div id="experience" className="experience-container">

      <div className="top">
        <h1>Experience</h1>
        <p>
          A mix of academic and industry roles that shaped how I think about
          building software.
        </p>
      </div>

      <div className="row">
        {stats.map((stats, i) => (
          <div className="stats-box" key={i}>
            <p className="number">{stats.number}</p>
            <p>{stats.label}</p>
          </div>
        ))}
      </div>

      <div className="experience-container">
        {experience.map ((exp, i) => (
          <div className="exp-card" key={i}>
            <div className="exp-header">
              <div className="exp-left">
                <img src={exp.icon} alt={exp.title} className="exp-icon" />
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-org">{exp.org}</p>
                </div>
              </div>
              <p className="exp-date">{exp.date}</p>
            </div>
            <p className="exp-desc">{exp.desc}</p>
            <div className="exp-skills">
              {exp.skills.map((skills, j) => (
                <span className="skill-chip" key={j}>{skills}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

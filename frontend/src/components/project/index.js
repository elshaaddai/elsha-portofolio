import React from "react";

const Project = () => {
  return (
    <div id="project" className="project-container">
      <h1>Project</h1>
      <div className="project-card">
        <span className="project-date">Jul 2025 - Dec 2025</span>
        <h3>Sistem Rekrutmen dan E-Filing Website</h3>

        <p className="project-role">
          Contributed as Backend Developer by implementing backend layer
          architecture, building RESTful APIs for recruitment and employee data
          management, developing CSV import functionality, integrating frontend
          pages with backend services using React.js, implementing automated
          email notifications using Nodemailer, and applying middleware with
          Role-Based Access Control (RBAC) for authentication and authorization.
        </p>
        <div className="skills">
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Postman</span>
          <span>Github</span>
          <span>Figma</span>
        </div>
      </div>

      <div className="project-card">
        <span className="project-date">Jan 2026 - May 2026</span>
        <h3>SmartLeave Filing System</h3>

        <p className="project-role">
          Contributed to thesis documentation by preparing system background,
          methodology, implementation overview, and final analysis. Applied the
          Evolutionary Prototyping methodology in documenting system development
          processes, developed use case scenarios with the development partner,
          conducted direct user interviews to evaluate system functionality and
          usability, and supported documentation of system evaluation results
          based on user feedback and usage analysis.
        </p>
        <div className="skills">
          <span>Microsoft Office</span>
          <span>draw.io</span>
          <span>Canva</span>
        </div>
      </div>

      <div className="project-card">
        <span className="project-date">Apr 2025 - May 2025</span>
        <h3>Mobile App Finote</h3>

        <p className="project-role">
          Contributed as a team member in developing a mobile financial
          recording application by creating UI/UX designs, implementing frontend
          slicing, and integrating several application pages with Firebase
          Realtime Database for financial data management.
        </p>
        <div className="skills">
          <span>TypeScript</span>
          <span>Firebase</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="project-card">
        <span className="project-date">Oct 2024 - Nov 2024</span>
        <h3>CarWash Website</h3>

        <p className="project-role">
          Contributed to the development of a car wash website by
          implementing the user interface, as well as integrating Firebase
          services to support application functionality and data management.
        </p>
        <div className="skills">
          <span>React.js</span>
          <span>Firebase</span>
          <span>Github</span>
        </div>
      </div>
    </div>
  );
};

export default Project;

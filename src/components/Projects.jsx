import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
        title: "University Financial Operations",
        description: "Managed faculty requisitions and purchase orders, audited travel expenses, and coordinated with multiple departments to streamline procurement processes, reducing errors by 15%.",
      image: "/project1.jpg",
        technologies: ["Financial Auditing", "Procurement Management", "Process Improvement"]
    },
    {
      id: 2,
        title: "Client Account Reconciliation",
        description: "Prepared and reconciled monthly bank statements for 15+ client accounts with 100% accuracy, collaborating with senior accountants to reconcile $29M+ worth of transactions.",
      image: "/project2.jpg",
        technologies: ["Bank Reconciliation", "Financial Analysis", "Microsoft Dynamics GP"]
    },
    {
      id: 3,
        title: "Student Organization Leadership",
        description: "Launched and managed the first JSOM scholarship program for international students, leading a fundraising campaign that raised over $10,000 in one semester.",
      image: "/project3.jpg",
        technologies: ["Leadership", "Fundraising", "Program Development"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Project Samples</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <p>Project Image</p>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="view-project-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

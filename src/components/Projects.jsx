import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Financial Policy Analysis",
      description: "Comprehensive analysis of fiscal policies and their economic impact on public sector budgeting and resource allocation.",
      image: "/project1.jpg",
      technologies: ["Policy Analysis", "Financial Modeling", "Budget Analysis"]
    },
    {
      id: 2,
      title: "Economic Data Research",
      description: "Statistical analysis of economic indicators and public finance data to inform evidence-based policy recommendations.",
      image: "/project2.jpg",
      technologies: ["Statistical Analysis", "Data Visualization", "Economic Research"]
    },
    {
      id: 3,
      title: "Program Cost-Benefit Analysis",
      description: "Evaluation of government programs and their cost-effectiveness in achieving policy objectives and fiscal responsibility.",
      image: "/project3.jpg",
      technologies: ["Cost-Benefit Analysis", "Program Evaluation", "Financial Assessment"]
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

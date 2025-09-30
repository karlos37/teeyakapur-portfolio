import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Policy Research Project 1",
      description: "Comprehensive analysis of social welfare policies and their impact on community outcomes.",
      image: "/project1.jpg",
      technologies: ["Policy Analysis", "Data Research", "Stakeholder Engagement"]
    },
    {
      id: 2,
      title: "Data Analysis Study",
      description: "Statistical analysis of public health data to inform policy recommendations.",
      image: "/project2.jpg",
      technologies: ["Statistical Analysis", "Data Visualization", "Policy Recommendations"]
    },
    {
      id: 3,
      title: "Community Impact Assessment",
      description: "Evaluation of community programs and their effectiveness in achieving policy goals.",
      image: "/project3.jpg",
      technologies: ["Program Evaluation", "Community Research", "Impact Assessment"]
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

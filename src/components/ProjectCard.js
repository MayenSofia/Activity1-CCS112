import React from 'react';

function ProjectCard({ title, description, technologies, deliverables }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies mb-3">
          <h5>Technologies Used:</h5>
          <div>
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech">{tech}</span>
            ))}
          </div>
        </div>
        
        {deliverables && (
          <div className="project-deliverables">
            <h5>Deliverables:</h5>
            <ul>
              {deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Case Study Sprint 2: Project and Task Management System",
      description: "A comprehensive project management system with task tracking, assignment, and status management capabilities.",
      technologies: ["React", "Bootstrap", "CSS", "Laravel"],
      deliverables: [
        "Working project and task management API",
        "Basic task workflow",
        "CRUD operations for projects",
        "Task creation, assignment, and updating",
        "Task statuses and priorities implementation"
      ]
    },
    {
      title: "Case Study Sprint 3: Resource and Budget Management System",
      description: "A system for tracking resources, budgets, and progress in project management.",
      technologies: ["React", "Bootstrap", "CSS", "Laravel"],
      deliverables: [
        "Resource assignment working",
        "Budget tracking functional",
        "Progress tracking UI",
        "Time tracking for tasks",
        "Gantt chart visualization"
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Here are some of the projects I've worked on</p>
      
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <ProjectCard 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              deliverables={project.deliverables}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
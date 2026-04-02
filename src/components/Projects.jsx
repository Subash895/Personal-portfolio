import React from 'react';
import { projects } from '../data/data';

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title scroll-animate">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card scroll-animate">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && project.github !== '#' && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        GitHub →
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

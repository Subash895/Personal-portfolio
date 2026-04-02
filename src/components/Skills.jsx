import React from 'react';
import { skills } from '../data/data';

function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title scroll-animate">Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category scroll-animate">
                        <h3>Languages</h3>
                        <div className="skill-list">
                            {skills.languages.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category scroll-animate">
                        <h3>Frameworks</h3>
                        <div className="skill-list">
                            {skills.frameworks.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category scroll-animate">
                        <h3>Tools</h3>
                        <div className="skill-list">
                            {skills.tools.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category scroll-animate">
                        <h3>Concepts</h3>
                        <div className="skill-list">
                            {skills.concepts.map((skill, index) => (
                                <span key={index} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
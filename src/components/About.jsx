import React from 'react';
import profilePhoto from '../images/IMG_0109.JPG';
import { about, personalInfo } from '../data/data';

function About() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title scroll-animate">About Me</h2>
                <div className="about-layout">
                    <div className="about-visual scroll-animate">
                        <div className="about-photo-card">
                            <img
                                src={profilePhoto}
                                alt={personalInfo.name}
                                className="about-photo"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="about-content scroll-animate">
                        {(about.paragraphs ?? [about.description]).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

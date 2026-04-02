import React from 'react';
import { about } from '../data/data';

function About() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title scroll-animate">About Me</h2>
                <div className="about-content scroll-animate">
                    <p>{about.description}</p>
                </div>
            </div>
        </section>
    );
}

export default About;
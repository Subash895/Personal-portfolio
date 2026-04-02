import React from 'react';
import { personalInfo } from '../data/data';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="fade-in">{personalInfo.name}</h1>
                <p className="title fade-in-delay-1">{personalInfo.title}</p>
                <p className="intro fade-in-delay-2">{personalInfo.intro}</p>
                <div className="cta-buttons fade-in-delay-2">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
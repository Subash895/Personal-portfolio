import React from 'react';
import { personalInfo } from '../data/data';

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title scroll-animate">Get In Touch</h2>
                <div className="contact-content scroll-animate">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        feel free to reach out!
                    </p>
                    <div className="contact-links">
                        <div className="contact-item">
                            <span>Email</span>
                            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                        </div>
                        <div className="contact-item">
                            <span>GitHub</span>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                View Profile →
                            </a>
                        </div>
                        <div className="contact-item">
                            <span>LinkedIn</span>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                Connect →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
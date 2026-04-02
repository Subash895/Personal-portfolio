import React from 'react';
import { personalInfo } from '../data/data';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.</p>
            </div>
        </footer>
    );
}

export default Footer;
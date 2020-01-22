import React from 'react';

import html from '../images/030-html-5.png';
import css from '../images/031-css.png';
import js from '../images/029-javascript.png';
import react from '../images/006-react.png';
import typescript from '../images/025-typescript.png';
import node from '../images/032-nodejs.png';
import mysql from '../images/021-mysql.png';
import github from '../images/010-github.png';


const OurStackSection = () => {
    return (
        <section id="stack" className="section stack-section">
            <h1 className="section-title"> Our Stack </h1>
            <p className="section-subheader"> We Specialize in the below technologies</p>
            <div className="icons-container">
            <div className="icon">
                <img src={html} alt="html" /> 
            </div>
            <div className="icon">
                <img src={css} alt="css" />
            </div>
            <div className="icon">
                <img src={js} alt="js" />
            </div>
            <div className="icon">
                <img src={react} alt="react" />
            </div>
            <div className="icon">
                <img src={typescript} alt="typescript" />
            </div>
            <div className="icon">
                <img src={node} alt="node" />
            </div>
            <div className="icon">
                <img src={mysql} alt="mysql" />
            </div>
            <div className="icon">
                <img src={github} alt="github" />
            </div>
            </div>
        </section>
    )
}

export default OurStackSection;
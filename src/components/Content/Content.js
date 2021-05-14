import React from 'react';
import './Content.scss';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';

export default function Content() {
    return (
        <div>
            <Portfolio/>
            <AboutMe/>
            <Contact/>
        </div>
    )
}

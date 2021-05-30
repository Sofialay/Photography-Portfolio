import React from 'react';
import './Content.scss';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import FirstPage from '../FirstPage/FirstPage';

export default function Content() {
    return (
        <div>
            <FirstPage/>
            <Portfolio/>
            <AboutMe/>
            <Contact/>
        </div>
    )
}

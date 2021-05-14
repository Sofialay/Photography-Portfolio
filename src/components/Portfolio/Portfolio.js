import React from 'react'
import './Portfolio.scss'
import {
    BrowserRouter, 
    Switch, 
    Route,
    Link 
  } from 'react-router-dom';
  import Lifestyle from './Lifestyle/Lifestyle';
  import Portrait from './Portrait/Portrait';


function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <BrowserRouter>
                <section className="portfolio-tags">
                    <Link className="portfolio-links" to="/portfolio"> All </Link>
                    <Link className="portfolio-links" to="/portfolio/lifestyle"> Lifestyle </Link>
                    <Link className="portfolio-links" to="/portfolio/portrait"> Portrait </Link>
                </section>
                <Switch>
                    <Route exact path="/portfolio" />
                    <Route exact path="/portfolio/lifestyle" component={Lifestyle} />
                    <Route exact path="/portfolio/portrait" component={Portrait} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Portfolio;

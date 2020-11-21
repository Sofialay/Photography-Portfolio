import React from 'react'
import './Portfolio.scss'
import {
    BrowserRouter, //lo que va a englobar toda mi pagina
    Switch, // el switch de los routes
    Route,
    Link // equivalente a 'case' de los switch
  } from 'react-router-dom';
  import Lifestyle from './Lifestyle/Lifestyle';
  import Portrait from './Portrait/Portrait';


//pasos a seguir:
//dentro tenemos tres secciones: about me, portfolio, contact
// con react router dom poder navegar entre las tres,
//dejando el header estatico

//que en navbar, onClick se cierre la ventana

function Portfolio() {
    return (
        <div className="portfolio">
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

import React from 'react';
import './App.scss';
import FirstPage from './components/FirstPage/FirstPage';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';




function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <div>
            <NavBar/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

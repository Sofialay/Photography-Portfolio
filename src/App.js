import React from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import NavBar from './components/NavBar/NavBar';
/*import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';*/
import Content from './components/Content/Content';
import {
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';
import './App.scss';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <section>
            <NavBar/>
            <Route exact path="/content" component={Content} />
          </section>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

/*            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contact" component={Contact} /> */

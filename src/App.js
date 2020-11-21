import React from 'react';
import './App.scss';
import FirstPage from './components/FirstPage/FirstPage';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import {
  BrowserRouter, //lo que va a englobar toda mi pagina
  Switch, // el switch de los routes
  Route // equivalente a 'case' de los switch
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'



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
          </div>
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

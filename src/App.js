import React from 'react';
// import FirstPage from './components/FirstPage/FirstPage';
import NavBar from './components/NavBar/NavBar';
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
        {/* <Switch> */}
          {/* <Route exact path="/" component={FirstPage} /> */}
          <section>
            <NavBar/>
            <Route exact path="/:section?" component={Content} />
          </section>
        {/* </Switch> */}
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
import React from 'react';
import {Router,Route,Switch,withRouter} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Intro from './Components/Intro'


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Intro}/>
      </Switch>
  );
}

export default withRouter(App);

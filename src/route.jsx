import React from  'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
// import Quizz from '/pages/quizz'

const Router = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      {/* <Route exact path='/quizz' component={Quizz}/> */}
    </Switch>
  </BrowserRouter>
  );
}

export default Router;

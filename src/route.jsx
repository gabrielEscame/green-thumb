import react from  'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Sun from './pages/sun';
import Pets from './pages/pets';
import Results from './pages/results';
import Plant from './pages/plant';

const Router = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/sun' component={Sun}/>
      <Route exact path='/water' component={Water}/>
      <Route exact path='/pets' component={Pets}/>
      <Route exact path='/results' component={Results}/>
      <Route exact path='/results:id' component={Plant}/>
    </Switch>
  </BrowserRouter>
}

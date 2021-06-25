import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage.component';


const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route exact path='/equipment' render={() => <p>This is equipment page</p>} />
    <Route exact path='/about-us' render={() => <p>This is About-us page</p>} />
    <Route exact path='/blog' render={() => <p>This is Blog page</p>} />   
  </Switch>
);


export default AppRoutes;
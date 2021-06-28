import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage.component';
import Page404 from '../../pages/Page404/Page404';
import DevPage from '../../pages/DevPage/DevPage.component';
import { useSelector } from 'react-redux';
import { getIsLogin } from '../../store/user/selectors';

const ProtectedRoute = ({ authenticated, ...props }) =>
  authenticated ? <Route {...props} /> : <Redirect to="/" />;

const AppRoutes = () => {
  const isLogin = useSelector(getIsLogin);
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <ProtectedRoute authenticated={isLogin} exact path='/equipment' component={DevPage} />
      <Route exact path='/about-us' render={DevPage} />
      <Route exact path='/blog' render={DevPage} />  
      <Route exact path='/blog-1' render={DevPage} />  
      <Route exact path='/blog-2' render={DevPage} />  
      <Route exact path='/blog-3' render={DevPage} />
      <Route exact path='/about-mntn' render={DevPage} />  
      <Route exact path='/contributors&writers' render={DevPage} />  
      <Route exact path='/write-for-us' render={DevPage} />  
      <Route exact path='/contact-us' render={DevPage} />
      <ProtectedRoute authenticated={isLogin} exact path='/privacy-policy' component={DevPage} />
      <Route exact path='/the-team' render={DevPage} />  
      <Route exact path='/jobs' render={DevPage} />  
      <Route exact path='/press' render={DevPage} />  
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default AppRoutes;

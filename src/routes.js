import React  from 'react';
import {Route, IndexRoute,browserHistory} from 'react-router';
import Home from './components/common/HomePage'
import StarwarsPage from './components/book/StarwarsPage'
import StarwarsDetailsPage from './components/book/StarwarsDetailsPage'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/login/LogoutPage'
import App from './components/App'
/*Here I have implemented the token based auth!!*/
function checkAuth(nextState, replace, cb) {
  let loginUserData = window.localStorage.getItem("token")
  if(!loginUserData){
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    cb();
  }
  cb();
}

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/starwars" onEnter={checkAuth} component={StarwarsPage}></Route>
    <Route path="/starwars/:type/:id" onEnter={checkAuth}  component={StarwarsDetailsPage}></Route>
    <Route path="/login"  component={LoginPage}></Route>
    <Route path="/logout" component={LogoutPage}></Route>
  </Route>
)

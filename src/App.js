import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import './App.scss';

import {loading} from "./containers/layouts";



// Containers
const DefaultLayout = React.lazy(() => import('./layouts'));

// Pages
const Login = React.lazy(() => import('./components/acquirerpay/Auth/Login'));
const ForgotPassword = React.lazy(() => import('./components/acquirerpay/Auth/ForgotPassword'));
const Register = React.lazy(() => import('./components/acquirerpay/Auth/Register'));
const Page404 = React.lazy(() => import('./components/acquirerpay/Errors/Page404'));
const Page500 = React.lazy(() => import('./components/acquirerpay/Errors/Page500'));


const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <DefaultLayout {...props}/>
      : <Redirect
        to={{
          pathname: '/login',
          state: {from: props.location},
        }}
      />}
  />
);

class App extends Component {

  constructor(props) {
    super(props);
    let isLoggedIn = false;
    if (localStorage.getItem("id_token") === null) {
      isLoggedIn = false;
    } else {
      isLoggedIn = true;
    }
    this.state = {
      isLoggedIn: isLoggedIn
    }
    console.log(isLoggedIn);
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;
    if ((window.location.pathname === "/login") && isLoggedIn) {
      window.location = "/dashboard";
      // this.props.history.push('/dashboard')

    }
    if ((window.location.pathname === "/") && isLoggedIn) {
      window.location = "/dashboard";
      // this.props.history.push('/dashboard')

    }
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/>
            <Route exact path="/forgot-password" name="Login Page" render={props => <ForgotPassword {...props}/>}/>
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>}/>
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
            <RestrictedRoute isLoggedIn={isLoggedIn} path="/" name="Home"/>
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;

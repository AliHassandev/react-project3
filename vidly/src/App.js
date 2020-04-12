import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import logo from './logo.svg';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import auth from './services/authService';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { render } from '@testing-library/react';
import JwtDecode from 'jwt-decode';

  class App extends Component {

  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState( { user } );
  }

  render() {
    return (
      <React.Fragment>
      <ToastContainer />
      
      <NavBar user={this.state.user} />
      <main id="root" role="main" className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" 
                  render={props => <Movies {...props} user={this.state.user} />} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="movies" />
          <Redirect to="not-found" />
        </Switch>
        <div className="starter-template">
          {/* <Movies /> */}
        </div>
  
      </main>
      </React.Fragment>
        );
  }

}

export default App;

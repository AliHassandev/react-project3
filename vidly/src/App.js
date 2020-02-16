import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main id="root" role="main" className="container">
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
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

export default App;

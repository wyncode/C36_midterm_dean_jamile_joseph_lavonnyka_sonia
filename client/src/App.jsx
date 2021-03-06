import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FindEats from './components/FindEats';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Home from './components/Home';
import MyEats from './components/MyEats';
import About from './components/About';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findeats" component={FindEats} />
          <Route path="/myeats" component={MyEats} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Page404 from './components/Page404';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/"><About /></Route>
        <Route exact path="/portfolio"><Portfolio /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route path="*"><Page404 /></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

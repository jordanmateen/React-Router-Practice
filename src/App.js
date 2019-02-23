import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {Switch, Route } from 'react-router-dom'
import Home from  './components/pages/Home.jsx'
import Feed from './components/pages/Feed.jsx'
import FAQ from  './components/pages/FAQ.jsx'
import Body from './components/Body.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path = "/home" component = {Home} />
            <Route path = "/feed" component = {Feed}/>
            <Route path = "/faq"  component = {FAQ} />
            <Route path = "/" component = {Body}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;

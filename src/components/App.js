import React, { Component } from 'react';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Tutorial from './tutorial/Tutorial';
import Header from './header';
import Footer from './footer';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' activeClassName="active" component={Home}/>
          <Route path='/portfolio' activeClassName="active" component={Portfolio}/>
          <Route path='/tutorial' activeClassName="active" component={Tutorial}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

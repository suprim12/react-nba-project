import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Teams from './components/Teams'
import Team from './components/Team'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
          <Route exact path="/" component={Home}></Route>
          <Route exact  path="/teams" component={Teams}></Route>
          <Route path="/team/:id" component={Team}></Route>
        <Footer/>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;

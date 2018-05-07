import React, { Component } from 'react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './LadingPage/Home';
import ShowInfo from './ShowInfoPage/ShowInfo';
import {dataService}  from '../Service/dataService';


class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/showinfo/:id' component={ShowInfo} />
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;

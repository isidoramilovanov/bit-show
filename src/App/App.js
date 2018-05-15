import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './LadingPage/Home';
import ShowInfo from './ShowInfoPage/ShowInfo';
import {dataService}  from '../Service/dataService';
import Header from './Partials/Header';

class App extends Component {


  

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/showinfo/:id' component={ShowInfo} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
